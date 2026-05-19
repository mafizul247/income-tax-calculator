import { useState } from "react";
import { useTranslation } from "react-i18next";
import { taxExampted } from "../../utilitis/taxExamption";
import { taxCalculation } from "../../utilitis/taxCalculation";
import ShowTax from "./ShowTax";
import { FaPlus, FaMinus } from "react-icons/fa";


const Draft = () => {
    const { t } = useTranslation();
    const [result, setResult] = useState(null);
    const [checkValue, setCheckValue] = useState("no");
    const [count, setCount] = useState(1);
    const [formData, setFormData] = useState({
        year: "",
        category: "",
        city: "",
        salary: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleIncreseCount = () => {
        if (checkValue === 'yes') {
            setCount(count + 1)
        }
    }

    const handleDecreseCount = () => {
        if (checkValue === 'yes' && count > 1) {
            setCount(count - 1)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form Data:", formData);
        const taxCategory = parseInt(formData.category);
        const taxArea = parseInt(formData.city);
        const totalSalary = parseInt(formData.salary);
        const financialYear = parseInt(formData.year);
        let taxPayer = taxCategory;

        if (checkValue === 'yes') {
            taxPayer = taxCategory + (count * 50000);
        }

        const taxExamption = taxExampted(totalSalary);

        const taxableIncome = totalSalary - taxExamption;

        const totalTax = taxCalculation(taxPayer, taxArea, taxableIncome);

        setResult({
            year: financialYear,
            salary: totalSalary,
            exemption: taxExamption,
            taxable: taxableIncome,
            totalTax,
            monthlyTax: totalTax / 12,
            minTax: taxArea,
        });

        console.log(taxPayer, taxArea, totalSalary, financialYear);
        console.log('Taxable', taxableIncome);
        console.log('Tax', totalTax)
        console.log(checkValue)
    };


    return (
        <>
            {
                result && <ShowTax result={result} />
            }
            <div className="max-w-3xl mx-auto mt-10 px-4">

                {/* HEADER */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-primary">
                        {t("tax_title")}
                    </h1>
                    <p className="text-sm opacity-70 mt-2">
                        {t("tax_subtitle") || "Calculate your income tax easily"}
                    </p>
                </div>

                {/* FORM CARD */}
                <div className="bg-base-100 shadow-xl rounded-2xl p-6 space-y-6">

                    {/* SECTION 1 */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg border-b pb-2">
                            {t("basic_info") || "Basic Information"}
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">

                            {/* Year */}
                            <select
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                            >
                                <option value="">{t("financial_year")}</option>
                                <option value={2026}>{t("year_2026")}</option>
                            </select>

                            {/* Category */}
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                            >
                                <option value="">{t("tax_category")}</option>
                                <option value={375000}>{t("general")}</option>
                                <option value={425000}>{t("female")}</option>
                                <option value={500000}>{t("disabled")}</option>
                                <option value={525000}>{t("freedom")}</option>
                            </select>

                        </div>
                    </div>

                    {/* SECTION 2 */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg border-b pb-2">
                            {t("location") || "Location"}
                        </h3>

                        <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                        >
                            <option value="">{t("select_city")}</option>
                            <option value={5000}>{t("dhaka")}</option>
                            <option value={4000}>{t("other")}</option>
                            <option value={3000}>{t("rural")}</option>
                        </select>
                    </div>

                    {/* SECTION 3 */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg border-b pb-2">
                            {t("family_info") || "Family Information"}
                        </h3>

                        {/* Toggle */}
                        <div className="flex justify-between items-center bg-base-200 p-3 rounded-lg">
                            <span>{t("disability_child")} ?</span>

                            <input
                                type="checkbox"
                                className="toggle toggle-primary"
                                checked={checkValue === "yes"}
                                onChange={() =>
                                    setCheckValue(checkValue === "yes" ? "no" : "yes")
                                }
                            />
                        </div>

                        {/* Counter */}
                        {checkValue === "yes" && (
                            <div className="flex justify-between items-center bg-base-200 p-3 rounded-lg">

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

                                    <span className="font-bold text-lg">{count}</span>

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
                    </div>

                    {/* SECTION 4 */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg border-b pb-2">
                            {t("income") || "Income"}
                        </h3>

                        <input
                            type="number"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            placeholder={t("salary_placeholder")}
                            className="input input-bordered w-full text-lg"
                        />
                    </div>

                    {/* SUBMIT */}
                    <button
                        onClick={handleSubmit}
                        className="btn btn-primary w-full text-lg"
                    >
                        {t("submit")}
                    </button>

                </div>
            </div>

        </>
    );
};

export default Draft;