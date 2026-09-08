import { useTranslation } from "react-i18next";

const ShowTax = ({ result }) => {
    const { t } = useTranslation();

    const {
        year,
        salary,
        exemption,
        taxable,
        taxAmount,
        rebate,
        afterRebateTax,
        minimumTaxApplied,
        netTax,
        monthlyTax,
        disabledChildCount,
        isNewTaxpayer,
    } = result;

    // ✅ Number formatter (with .00)
    const formatMoney = (value) => {
        return new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value || 0);
    };

    const YEAR_LABEL_KEYS = {
        2030: "year_2030_31",
        2028: "year_2028_29_29_30",
        2026: "year_2026_27_27_28",
        2025: "year_2025_26",
    };
    const yearLabel = t(YEAR_LABEL_KEYS[year] || "year_2025_26");

    return (
        <div className="max-w-xl mx-auto mt-6">

            <div className="card bg-base-100 shadow-xl border">

                <div className="card-body">

                    <h2 className="card-title text-center text-primary justify-center text-xl">
                        {t("tax_result")}
                    </h2>

                    <div className="text-center text-sm opacity-70 -mt-2">
                        {t("financial_year")}: <span className="font-semibold">{yearLabel}</span>
                        {year >= 2026 && disabledChildCount > 0 && (
                            <> &nbsp;•&nbsp; {t("child_count")}: <span className="font-semibold">{disabledChildCount}</span></>
                        )}
                        {year >= 2026 && isNewTaxpayer && (
                            <> &nbsp;•&nbsp; <span className="font-semibold">{t("new_taxpayer_label")}</span></>
                        )}
                    </div>

                    <div className="space-y-3 mt-4">

                        {/* Annual Salary */}
                        <div className="flex justify-between">
                            <span>{t("annual_salary")}</span>
                            <span className="font-semibold">
                                ৳ {formatMoney(salary)}
                            </span>
                        </div>

                        {/* Tax Exemption */}
                        <div className="flex justify-between">
                            <span>{t("tax_exemption")}</span>
                            <span className="font-semibold">
                                ৳ {formatMoney(exemption)}
                            </span>
                        </div>

                        {/* Taxable Income */}
                        <div className="flex justify-between">
                            <span>{t("taxable_income")}</span>
                            <span className="font-semibold">
                                ৳ {formatMoney(taxable)}
                            </span>
                        </div>

                        <div className="divider"></div>

                        {/* Total Tax (before rebate) */}
                        <div className="flex justify-between text-lg font-bold text-primary">
                            <span>{t("total_tax")}</span>
                            <span>৳ {formatMoney(taxAmount)}</span>
                        </div>

                        {/* Tax Rebate */}
                        <div className="flex justify-between">
                            <span>{t("tax_rebat")}</span>
                            <span>৳ {formatMoney(rebate)}</span>
                        </div>

                        {/* After Rebate */}
                        <div className="flex justify-between  font-semibold">
                            <span>{t("after_rebat")}</span>
                            <span>৳ {formatMoney(afterRebateTax)}</span>
                        </div>

                        {/* Minimum Tax */}
                        <div className="flex justify-between text-sm opacity-70">
                            <span>{t("min_tax_final")}</span>
                            <span>
                                ৳ {formatMoney(minimumTaxApplied)}
                            </span>
                        </div>

                        {/* Net Tax */}
                        <div className="flex justify-between text-lg font-bold text-success">
                            <span>{t("net_tax")}</span>
                            <span>৳ {formatMoney(netTax)}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>{t("monthly_tax")}</span>
                            <span>৳ {formatMoney(monthlyTax)}</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowTax;
