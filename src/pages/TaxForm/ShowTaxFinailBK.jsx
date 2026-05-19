import { useTranslation } from "react-i18next";

const ShowTax = ({ result }) => {
    const { t } = useTranslation();

    const {
        salary,
        exemption,
        taxable,
        totalTax,
        rebate,
        minTax
    } = result;


    let afterRebateTax = 0;

    if (totalTax === 0) {
        afterRebateTax = 0
    }
    else if (totalTax > minTax) {
        const newrebatet = totalTax - rebate
        if (newrebatet > minTax) {
            afterRebateTax = newrebatet;
        } else {
            afterRebateTax = minTax
        }
    }
    


    return (
        <div className="max-w-xl mx-auto mt-6">

            <div className="card bg-base-100 shadow-xl border">

                <div className="card-body">

                    <h2 className="card-title text-center text-primary justify-center">
                        {t("tax_result")}
                    </h2>

                    <div className="space-y-3 mt-4">

                        {/* Annual Salary */}
                        <div className="flex justify-between">
                            <span>{t("annual_salary")}</span>
                            <span className="font-semibold">
                                ৳ {salary}
                            </span>
                        </div>

                        {/* Tax Exemption */}
                        <div className="flex justify-between">
                            <span>{t("tax_exemption")}</span>
                            <span className="font-semibold">
                                ৳ {exemption}
                            </span>
                        </div>

                        {/* Taxable Income */}
                        <div className="flex justify-between">
                            <span>{t("taxable_income")}</span>
                            <span className="font-semibold">
                                ৳ {taxable}
                            </span>
                        </div>

                        <div className="divider"></div>

                        {/* Total Tax */}
                        <div className="flex justify-between text-lg font-bold text-primary">
                            <span>{t("total_tax")}</span>
                            <span>৳ {totalTax}</span>
                        </div>

                        {/* Tax Rebate */}
                        <div className="flex justify-between">
                            <span>{t("tax_rebat")}</span>
                            <span>
                                ৳ {totalTax > 0 ? rebate : 0}
                            </span>
                        </div>

                        {/* Tax After Rebate */}
                        <div className="flex justify-between text-lg font-bold text-success">
                            <span>{t("after_rebat")}</span>
                            <span>৳ {afterRebateTax}</span>
                        </div>

                        {/* Minimum Tax */}
                        <div className="flex justify-between text-sm opacity-70">
                            <span>{t("min_tax_final")}</span>
                            <span>৳ {totalTax === 0 ? 0 : minTax}</span>
                        </div>

                        {/* Net Tax After Rebate */}
                        <div className="flex justify-between text-lg font-bold text-success">
                            <span>Net Tax</span>
                            <span>৳ {afterRebateTax}</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowTax;