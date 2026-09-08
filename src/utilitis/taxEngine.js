/**
 * ============================================================================
 *  Central Tax Engine
 * ============================================================================
 *  Implements every financial year the app supports, each traced back to an
 *  authoritative source:
 *
 *    - year = "2025" -> FY 2025-2026
 *      Source: "Tax Calucation 2025-2026" sheet (older NBR rules)
 *
 *    - year = "2026" -> FY 2026-2027 & FY 2027-2028 (identical rules)
 *    - year = "2028" -> FY 2028-2029 & FY 2029-2030 (identical rules)
 *    - year = "2030" -> FY 2030-2031
 *      Source: NBR circular "আয়কর পরিপত্র ২০২৬-২০২৭" (Aug/Sep 2026),
 *      section ১.১ / ১.২ / ১.৩ — these three all share the same structure:
 *      an NBR slab table + 3 category exemption points + a flat minimum tax
 *      (with a lower amount for a first-time/new taxpayer).
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1) Tax-free exemption on gross salary (one-third rule, capped at 450,000)
//    Unchanged across every year in the source documents.
// ----------------------------------------------------------------------------
const calcExemption = (salary) => {
    if (!salary || isNaN(salary) || salary <= 0) return 0;
    return Math.min(salary / 3, 450000);
};

// ----------------------------------------------------------------------------
// 2) Tax-free threshold per payer category
//
//    Category codes used throughout the app (same 4 codes for every year):
//      general  -> General taxpayer
//      female   -> Female taxpayer / senior citizen aged 65+
//      disabled -> Person with disability / third-gender taxpayer
//                  (these two were merged into ONE bracket starting FY 2026-2027)
//      freedom  -> Gazetted war-wounded freedom fighter / gazetted
//                  "July Fighter" wounded in the July 2024 uprising
//                  (these two were merged into ONE bracket starting FY 2026-2027)
// ----------------------------------------------------------------------------
const THRESHOLDS = {
    2025: {
        // FY 2025-2026 — "Tax Calucation 2025-2026" sheet
        general: 350000,
        female: 400000,
        disabled: 475000,
        freedom: 500000,
    },
    2026: {
        // FY 2026-2027 & FY 2027-2028 — circular section ১.১, page 2
        general: 400000,
        female: 450000,
        disabled: 525000, // ২. তৃতীয় লিঙ্গের করদাতা এবং প্রতিবন্ধী ব্যক্তি করদাতা
        freedom: 550000,  // ৩. গেজেটভুক্ত যুদ্ধাহত মুক্তিযোদ্ধা ও জুলাই যোদ্ধা
    },
    2028: {
        // FY 2028-2029 & FY 2029-2030 — circular section ১.২, page 3
        general: 450000,
        female: 500000,
        disabled: 575000,
        freedom: 600000,
    },
    2030: {
        // FY 2030-2031 — circular section ১.৩, page 4-5
        general: 500000,
        female: 550000,
        disabled: 625000,
        freedom: 650000,
    },
};

// ----------------------------------------------------------------------------
// 3) Minimum tax
//
//    FY 2025-2026 uses the older area/city-based minimum tax table.
//    FY 2026-2027 onward, the circular replaces that with a FLAT minimum tax
//    of ৳5,000 (or ৳1,000 for a brand-new, first-time taxpayer) — city no
//    longer matters. See circular page 2/3/5: "নূন্যতম করের পরিমাণ হবে
//    ৫,০০০ টাকা, তবে নতুন করদাতাগণের ক্ষেত্রে ১,০০০ টাকা।"
// ----------------------------------------------------------------------------
const CITY_MIN_TAX = {
    5000: 5000, // Dhaka / Chattagram City Corporation
    4000: 4000, // Other City Corporation
    3000: 3000, // Area outside City Corporation
};

const FLAT_MIN_TAX = 5000;
const FLAT_MIN_TAX_NEW_TAXPAYER = 1000;

const usesFlatMinTax = (year) => year >= 2026;

// ----------------------------------------------------------------------------
// 4) NBR tax slabs, applied sequentially to (taxable income - threshold)
// ----------------------------------------------------------------------------

// FY 2025-2026: 100k@5%, 400k@10%, 500k@15%, 500k@20%, 2,000k@25%, rest@30%
const SLABS_2025_26 = [
    { amount: 100000, rate: 0.05 },
    { amount: 400000, rate: 0.10 },
    { amount: 500000, rate: 0.15 },
    { amount: 500000, rate: 0.20 },
    { amount: 2000000, rate: 0.25 },
    { amount: Infinity, rate: 0.30 },
];

// FY 2026-2027 & 2027-2028 — circular page 2:
// 300k@10%, 400k@15%, 500k@20%, 2,000k@25%, rest@30%
const SLABS_2026_27_TO_2027_28 = [
    { amount: 300000, rate: 0.10 },
    { amount: 400000, rate: 0.15 },
    { amount: 500000, rate: 0.20 },
    { amount: 2000000, rate: 0.25 },
    { amount: Infinity, rate: 0.30 },
];

// FY 2028-2029 & 2029-2030 — circular page 3:
// 300k@10%, 400k@15%, 500k@20%, 2,000k@25%, 26,350k@30%, rest@35%
const SLABS_2028_29_TO_2029_30 = [
    { amount: 300000, rate: 0.10 },
    { amount: 400000, rate: 0.15 },
    { amount: 500000, rate: 0.20 },
    { amount: 2000000, rate: 0.25 },
    { amount: 26350000, rate: 0.30 },
    { amount: Infinity, rate: 0.35 },
];

// FY 2030-2031 — circular page 4-5:
// 300k@10%, 400k@15%, 500k@20%, 2,000k@25%, 26,300k@30%, rest@35%
const SLABS_2030_31 = [
    { amount: 300000, rate: 0.10 },
    { amount: 400000, rate: 0.15 },
    { amount: 500000, rate: 0.20 },
    { amount: 2000000, rate: 0.25 },
    { amount: 26300000, rate: 0.30 },
    { amount: Infinity, rate: 0.35 },
];

const SLABS_BY_YEAR = {
    2025: SLABS_2025_26,
    2026: SLABS_2026_27_TO_2027_28,
    2028: SLABS_2028_29_TO_2029_30,
    2030: SLABS_2030_31,
};

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
//    NetRebate = MIN(15% of eligible investment, 3% of taxable income)
//    A ৳1,00,00,000 (1 crore) ceiling on eligible investment is applied from
//    FY 2026-2027 onward (as documented in the FY 2026-2027 workbook); FY
//    2025-2026 has no such ceiling.
// ----------------------------------------------------------------------------
const MAX_ELIGIBLE_INVESTMENT = 10000000; // 1 crore

const calcInvestmentRebate = (actualInvestment, taxableIncome, year) => {
    if (!actualInvestment || isNaN(actualInvestment) || actualInvestment <= 0) return 0;

    const eligibleInvestment =
        year >= 2026 ? Math.min(actualInvestment, MAX_ELIGIBLE_INVESTMENT) : actualInvestment;

    const byInvestment = eligibleInvestment * 0.15;
    const byIncome = taxableIncome * 0.03;

    return Math.min(byInvestment, byIncome);
};

// ----------------------------------------------------------------------------
// 6) Final combination
// ----------------------------------------------------------------------------
const finalizeTax = (taxAmount, rebate, minTax) => {
    const appliedRebate = taxAmount > 0 ? rebate : 0;
    const afterRebateTax = taxAmount > appliedRebate ? taxAmount - appliedRebate : taxAmount;
    const minimumTaxApplied = afterRebateTax > 0 ? minTax : 0;
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
 * @param {number} params.year   2025 | 2026 | 2028 | 2030
 * @param {string} params.category  'general' | 'female' | 'disabled' | 'freedom'
 * @param {number} [params.city]    5000 | 4000 | 3000 — only used when year === 2025
 * @param {number} params.salary    annual gross salary
 * @param {number} [params.investment]         actual investment amount
 * @param {number} [params.disabledChildCount] number of disabled dependents
 *        (adds +50,000/each to the threshold — applies to every year FROM
 *        FY 2026-2027 onward; FY 2025-2026 has no such benefit)
 * @param {boolean} [params.isNewTaxpayer]      first-time taxpayer flag — only
 *        relevant from FY 2026-2027 onward (drops minimum tax to ৳1,000)
 */
const calculateTax = ({
    year,
    category,
    city,
    salary,
    investment = 0,
    disabledChildCount = 0,
    isNewTaxpayer = false,
}) => {
    const exemption = calcExemption(salary);
    const taxableIncome = Math.max(salary - exemption, 0);

    const baseThreshold = THRESHOLDS[year]?.[category] ?? 0;
    const childBonus = year >= 2026 ? disabledChildCount * 50000 : 0;
    const threshold = baseThreshold + childBonus;

    const slabs = SLABS_BY_YEAR[year] || SLABS_2025_26;
    const taxAmount = calcSlabTax(taxableIncome, threshold, slabs);

    const rebate = calcInvestmentRebate(investment, taxableIncome, year);

    const minTax = usesFlatMinTax(year)
        ? (isNewTaxpayer ? FLAT_MIN_TAX_NEW_TAXPAYER : FLAT_MIN_TAX)
        : (CITY_MIN_TAX[city] || 0);

    const { appliedRebate, afterRebateTax, minimumTaxApplied, netTax, monthlyTax } = finalizeTax(
        taxAmount,
        rebate,
        minTax
    );

    return {
        year,
        category,
        city,
        salary,
        exemption,
        taxable: taxableIncome,
        threshold,
        disabledChildCount: year >= 2026 ? disabledChildCount : 0,
        isNewTaxpayer: usesFlatMinTax(year) ? isNewTaxpayer : false,
        taxAmount,
        rebate: appliedRebate,
        afterRebateTax,
        cityMinTax: minTax,
        minimumTaxApplied,
        netTax,
        monthlyTax,
    };
};

export { calculateTax, THRESHOLDS, CITY_MIN_TAX, FLAT_MIN_TAX, FLAT_MIN_TAX_NEW_TAXPAYER };
