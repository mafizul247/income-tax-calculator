/**
 * ============================================================================
 *  Central Tax Engine
 * ============================================================================
 *  Implements BOTH financial years side by side, built directly from the two
 *  sheets in "Salary_Tax_Calculation_Update_25-26___26-27_.xlsx":
 *
 *    - "Tax Calucation 2025-2026"  -> year = "2025" (FY 2025-2026)
 *    - "Tax Calucation 2026-2027"  -> year = "2026" (FY 2026-2027)
 *
 *  Every formula below is a direct translation of the corresponding Excel
 *  cell formula (references are noted in comments), so switching the
 *  Financial Year dropdown switches the whole rule-set cleanly.
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1) Tax-free exemption on gross salary
//    Same formula in BOTH sheets (D6/D5 cell): MIN(salary / 3, 450000)
// ----------------------------------------------------------------------------
const calcExemption = (salary) => {
    if (!salary || isNaN(salary) || salary <= 0) return 0;
    return Math.min(salary / 3, 450000);
};

// ----------------------------------------------------------------------------
// 2) Tax-free threshold per payer category (I5:J8 / I6:J9 lookup tables)
// ----------------------------------------------------------------------------
const THRESHOLDS = {
    2025: {
        // FY 2025-2026 — "Tax Calucation 2025-2026" sheet, I5:J8
        general: 350000,
        female: 400000,
        disabled: 475000,
        freedom: 500000,
    },
    2026: {
        // FY 2026-2027 — "Tax Calucation 2026-2027" sheet, I6:J9
        general: 375000,
        female: 425000,
        disabled: 500000,
        freedom: 525000,
    },
};

// ----------------------------------------------------------------------------
// 3) Minimum tax by city / area (I13:J15 / I12:J14 — identical both years)
// ----------------------------------------------------------------------------
const CITY_MIN_TAX = {
    5000: 5000, // Dhaka / Chattagram City Corporation
    4000: 4000, // Other City Corporation
    3000: 3000, // Area outside City Corporation
};

// ----------------------------------------------------------------------------
// 4) NBR tax slabs, applied sequentially to (taxable income - threshold)
// ----------------------------------------------------------------------------

// FY 2025-2026 sheet rows 12-17: 100k@5%, 400k@10%, 500k@15%, 500k@20%, 2,000k@25%, rest@30%
const SLABS_2025_26 = [
    { amount: 100000, rate: 0.05 },
    { amount: 400000, rate: 0.10 },
    { amount: 500000, rate: 0.15 },
    { amount: 500000, rate: 0.20 },
    { amount: 2000000, rate: 0.25 },
    { amount: Infinity, rate: 0.30 },
];

// FY 2026-2027 sheet rows 13-17: 300k@10%, 400k@15%, 500k@20%, 2,000k@25%, rest@30%
const SLABS_2026_27 = [
    { amount: 300000, rate: 0.10 },
    { amount: 400000, rate: 0.15 },
    { amount: 500000, rate: 0.20 },
    { amount: 2000000, rate: 0.25 },
    { amount: Infinity, rate: 0.30 },
];

const calcSlabTax = (taxableIncome, threshold, slabs) => {
    if (taxableIncome <= threshold) return 0;

    let remaining = taxableIncome - threshold;
    let tax = 0;

    for (const slab of slabs) {
        if (remaining <= 0) break;
        const amountInSlab = Math.min(remaining, slab.amount);
        tax += amountInSlab * slab.rate;
        remaining -= amountInSlab;
    }

    return tax;
};

// ----------------------------------------------------------------------------
// 5) Investment rebate
//    Both sheets: NetRebate = MIN(15% of actual investment, 3% of taxable income)
//    (2025-2026 sheet row 25-28 / 2026-2027 sheet row 25-29)
//
//    The FY 2026-2027 sheet additionally lists a reference row
//    "One Million Thousand = 10,000,000" (F28) — this is the maximum amount
//    of investment eligible for the rebate. We apply it as a cap on the
//    ACTUAL investment used in the 15% calculation (the sheet doesn't wire
//    it into a cell formula, but this mirrors the real NBR rule it documents).
// ----------------------------------------------------------------------------
const MAX_ELIGIBLE_INVESTMENT_2026_27 = 10000000; // 1 crore — sheet row "One Million Thousand"

const calcInvestmentRebate = (actualInvestment, taxableIncome, year) => {
    if (!actualInvestment || isNaN(actualInvestment) || actualInvestment <= 0) return 0;

    const eligibleInvestment =
        year === 2026
            ? Math.min(actualInvestment, MAX_ELIGIBLE_INVESTMENT_2026_27)
            : actualInvestment;

    const byInvestment = eligibleInvestment * 0.15; // 15% Eligible Amount for Investment
    const byIncome = taxableIncome * 0.03; // 3% of Taxable Income for Investment

    return Math.min(byInvestment, byIncome);
};

// ----------------------------------------------------------------------------
// 6) Final combination — identical pattern in both sheets:
//    Rebate         = IF(TaxAmount > 0, rebate, 0)
//    After Rebate   = IF(TaxAmount > Rebate, TaxAmount - Rebate, TaxAmount)
//    Min Tax Applied= IF(AfterRebate > 0, CityMinTax, 0)
//    Net Tax        = IF(AfterRebate > MinTaxApplied, AfterRebate, MinTaxApplied)
//    Monthly        = Net Tax / 12
// ----------------------------------------------------------------------------
const finalizeTax = (taxAmount, rebate, cityMinTax) => {
    const appliedRebate = taxAmount > 0 ? rebate : 0;
    const afterRebateTax = taxAmount > appliedRebate ? taxAmount - appliedRebate : taxAmount;
    const minimumTaxApplied = afterRebateTax > 0 ? cityMinTax : 0;
    const netTax = afterRebateTax > minimumTaxApplied ? afterRebateTax : minimumTaxApplied;

    return {
        appliedRebate,
        afterRebateTax,
        minimumTaxApplied,
        netTax,
        monthlyTax: netTax / 12,
    };
};

/**
 * Main entry point.
 *
 * @param {Object} params
 * @param {number} params.year               2025 (FY 2025-2026) or 2026 (FY 2026-2027)
 * @param {string} params.category           'general' | 'female' | 'disabled' | 'freedom'
 * @param {number} params.city                5000 | 4000 | 3000
 * @param {number} params.salary              annual gross salary
 * @param {number} [params.investment]        actual investment amount
 * @param {number} [params.disabledChildCount] number of disabled children
 *        (only affects the result for FY 2026-2027 — that benefit doesn't
 *        exist in the FY 2025-2026 sheet)
 */
const calculateTax = ({
    year,
    category,
    city,
    salary,
    investment = 0,
    disabledChildCount = 0,
}) => {
    const exemption = calcExemption(salary);
    const taxableIncome = Math.max(salary - exemption, 0);

    const baseThreshold = THRESHOLDS[year]?.[category] ?? 0;
    // Disabled-child threshold bonus (+50,000/child) only exists in the
    // FY 2026-2027 sheet (cell E2 / D12 formula: ...+E2*50000)
    const childBonus = year === 2026 ? disabledChildCount * 50000 : 0;
    const threshold = baseThreshold + childBonus;

    const slabs = year === 2026 ? SLABS_2026_27 : SLABS_2025_26;
    const taxAmount = calcSlabTax(taxableIncome, threshold, slabs);

    const rebate = calcInvestmentRebate(investment, taxableIncome, year);
    const cityMinTax = CITY_MIN_TAX[city] || 0;

    const { appliedRebate, afterRebateTax, minimumTaxApplied, netTax, monthlyTax } = finalizeTax(
        taxAmount,
        rebate,
        cityMinTax
    );

    return {
        year,
        category,
        city,
        salary,
        exemption,
        taxable: taxableIncome,
        threshold,
        disabledChildCount: year === 2026 ? disabledChildCount : 0,
        taxAmount,
        rebate: appliedRebate,
        afterRebateTax,
        cityMinTax,
        minimumTaxApplied,
        netTax,
        monthlyTax,
    };
};

export { calculateTax, THRESHOLDS, CITY_MIN_TAX };
