import { useTranslation } from "react-i18next";

const ShowTax = ({ result }) => {
    const { t } = useTranslation();

    // console.log(result)

    return (
        <div className="max-w-xl mx-auto mt-6">

            <div className="card bg-base-100 shadow-xl border">

                <div className="card-body">

                    <h2 className="card-title text-center text-primary justify-center">
                        {t("tax_result")}
                    </h2>

                    <div className="space-y-3 mt-4">

                        <div className="flex justify-between">
                            <span>{t("annual_salary")}</span>
                            <span className="font-semibold">
                                ৳ {result.salary.toLocaleString()}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>{t("tax_exemption")}</span>
                            <span className="font-semibold">
                                ৳ {result.exemption.toLocaleString()}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>{t("taxable_income")}</span>
                            <span className="font-semibold">
                                ৳ {result.taxable.toLocaleString()}
                            </span>
                        </div>

                        <div className="divider"></div>

                        <div className="flex justify-between text-lg font-bold text-primary">
                            <span>{t("total_tax")}</span>
                            <span>৳ {result.totalTax.toLocaleString()}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>{t("tax_rebat")}</span>
                            <span>৳ {result.rebate.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between">
                            <span>{t("min_tax_final")}</span>
                            <span>৳ {result.minimumTax.toLocaleString()}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>{t("monthly_tax")}</span>
                            <span>৳ {result.monthlyTax.toLocaleString()}</span>
                        </div>

                        {(result.totalTax > 0 && result.totalTax <= 5000) && <div className="flex justify-between text-sm opacity-70">
                            <span>{t("min_tax")}</span>
                            <span>৳ {result.minTax.toLocaleString()}</span>
                        </div>}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowTax;