import { useState } from "react";
import { useTranslation } from "react-i18next";
import { taxExampted } from "../../utilitis/taxExamption";
import { taxCalculation } from "../../utilitis/taxCalculation";
import { investment } from "../../utilitis/investmentCalculation";
import { minTaxCalculation } from "../../utilitis/minTaxCalculation";
import ShowTax from "./ShowTax";
import { FaPlus, FaMinus } from "react-icons/fa";

const TaxForm = () => {
    const { t } = useTranslation();

    const [result, setResult] = useState(null);
    const [checkValue, setCheckValue] = useState("no");
    const [count, setCount] = useState(1);

    const [formData, setFormData] = useState({
        year: "",
        category: "",
        city: "",
        investment: "",
        salary: "",
    });

    // ✅ Format number
    const formatNumber = (value) => {
        if (!value) return "";
        return new Intl.NumberFormat("en-US").format(value);
    };

    // ✅ Handle change (remove comma)
    const handleChange = (e) => {
        const { name, value } = e.target;
        const cleanValue = value.replace(/,/g, "");

        setFormData({
            ...formData,
            [name]: cleanValue,
        });
    };

    const handleIncreseCount = () => {
        if (checkValue === "yes") setCount(count + 1);
    };

    const handleDecreseCount = () => {
        if (checkValue === "yes" && count > 1) setCount(count - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const category = parseInt(formData.category);
        const taxArea = parseInt(formData.city);
        const totalSalary = parseInt(formData.salary);
        const financialYear = parseInt(formData.year);
        const ActualInv = parseInt(formData.investment || 0);

        let taxSlab = category;

        // ✅ Child benefit
        if (checkValue === "yes") {
            taxSlab += count * 50000;
        }

        const taxExamption = taxExampted(totalSalary);
        const taxableIncome = totalSalary - taxExamption;

        const totalTax = taxCalculation(taxSlab, taxArea, taxableIncome);
        const minimumTax = minTaxCalculation(taxArea, totalTax);
        const invRebate = investment(ActualInv, taxableIncome);

        setResult({
            year: financialYear,
            salary: totalSalary,
            exemption: taxExamption,
            taxable: taxableIncome,
            taxSlab,
            totalTax,
            rebate: invRebate,
            minimumTax,
            minTax: taxArea,
            hasDisableChild: checkValue,
            childCount: count,
        });
    };

    return (
        <>
            {result && <ShowTax result={result} />}

            <div className="max-w-xl mx-auto mt-10 p-6 bg-base-200 rounded-xl shadow">

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Row 1 */}
                    <div className="grid md:grid-cols-2 gap-4">

                        {/* Year */}
                        <div>
                            <label className="label">
                                <span className="label-text">{t("financial_year")}</span>
                            </label>
                            <select
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="">{t("financial_year")}</option>
                                <option value={2526}>{t("year_2026")}</option>
                            </select>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="label">
                                <span className="label-text">{t("tax_category")}</span>
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="">{t("select_category")}</option>
                                <option value={375000}>{t("general")}</option>
                                <option value={425000}>{t("female")}</option>
                                <option value={500000}>{t("disabled")}</option>
                                <option value={525000}>{t("freedom")}</option>
                            </select>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid md:grid-cols-2 gap-4">

                        {/* City */}
                        <div>
                            <label className="label">
                                <span className="label-text">{t("city")}</span>
                            </label>
                            <select
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="">{t("select_city")}</option>
                                <option value={5000}>{t("dhaka")}</option>
                                <option value={4000}>{t("other")}</option>
                                <option value={3000}>{t("rural")}</option>
                            </select>
                        </div>

                        {/* Disabled Child Toggle */}
                        <div>
                            <br />
                            <label className="label">
                                <span className="label-text">{t("disability_child")} &nbsp;</span>
                            </label>
                            <input
                                type="checkbox"
                                className="toggle toggle-primary"
                                checked={checkValue === "yes"}
                                onChange={() =>
                                    setCheckValue(checkValue === "yes" ? "no" : "yes")
                                }
                            />
                        </div>
                    </div>

                    {/* Child Count */}
                    {checkValue === "yes" && (
                        <div className="flex justify-between items-center bg-base-100 p-3 rounded">

                            <span>{t("child_count")}</span>

                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={handleDecreseCount}
                                    className="btn btn-sm"
                                    disabled={count === 1}
                                >
                                    <FaMinus />
                                </button>

                                <span className="font-bold">{count}</span>

                                <button
                                    type="button"
                                    onClick={handleIncreseCount}
                                    className="btn btn-sm btn-primary"
                                >
                                    <FaPlus />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Investment */}
                    <div>
                        <label className="label">
                            <span className="label-text">{t("investment_amount")}</span>
                        </label>

                        <input
                            type="text"
                            name="investment"
                            value={formatNumber(formData.investment)}
                            onChange={handleChange}
                            placeholder={t("investment_entry")}
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Salary */}
                    <div>
                        <label className="label">
                            <span className="label-text">
                                {t("salary")}
                            </span>
                        </label>

                        <input
                            type="text"
                            name="salary"
                            value={formatNumber(formData.salary)}
                            onChange={handleChange}
                            placeholder={t("salary_placeholder")}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-primary w-full">
                        {t("submit")}
                    </button>

                </form>
            </div>
        </>
    );
};

export default TaxForm;