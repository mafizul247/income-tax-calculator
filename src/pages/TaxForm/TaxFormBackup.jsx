import { useState } from "react";
import { useTranslation } from "react-i18next";
import { taxExampted } from "../../utilitis/taxExamption";
import { taxCalculation } from "../../utilitis/taxCalculation";
import ShowTax from "./ShowTax";
import { FaPlus, FaMinus } from "react-icons/fa";
import { investment } from "../../utilitis/investmentCalculation";
import { minTaxCalculation } from "../../utilitis/minTaxCalculation";


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
        const category = (parseInt(formData.category));
        const taxArea = parseInt(formData.city);
        const totalSalary = parseInt(formData.salary);
        const financialYear = parseInt(formData.year);
        const ActualInv = parseInt(formData.investment);

        let taxSlab = category;

        if (checkValue === 'yes') {
            taxSlab = taxSlab + (count * 50000);
        }

        const taxExamption = taxExampted(totalSalary);

        const taxableIncome = totalSalary - taxExamption;

        const totalTax = taxCalculation(category, taxArea, taxableIncome);

        const minimumTax = minTaxCalculation(taxArea, totalTax);

        const invRebate = investment(ActualInv, taxableIncome);


        setResult({
            year: financialYear,
            salary: totalSalary,
            exemption: taxExamption,
            taxable: taxableIncome,
            taxSlab: taxSlab,
            totalTax: totalTax,
            monthlyTax: totalTax / 12,
            rebate: invRebate,
            minimumTax: minimumTax,
            minTax: taxArea,
            hasDisableChild: checkValue,
            childCount: count,
        });

        console.log('formData', formData)
        console.log('result', result)
    };


    return (
        <>
            {
                result && <ShowTax result={result} />
            }
            <div className="max-w-xl mx-auto mt-10 p-6 bg-base-200 rounded-xl shadow">

                {/* <h2 className="text-2xl font-bold mb-6 text-center">
                    {t("tax_title")}
                </h2> */}

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="grid gird-cols-1 md:grid-cols-2 gap-4">
                        {/* Financial Year */}
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

                        {/* Tax Category */}
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

                    <div className="grid gird-cols-1 md:grid-cols-2 gap-4">

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

                        {/* Disable Children */}
                        <div className="flex gap-4">
                            <label className="label">
                                <span className="label-text">{t("disability_child")} ?</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="option"
                                    value="yes"
                                    checked={checkValue === "yes"}
                                    onChange={(e) => setCheckValue(e.target.value)}
                                    className="radio"
                                />
                                {t("yes")}
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="option"
                                    value="no"
                                    checked={checkValue === "no"}
                                    onChange={(e) => setCheckValue(e.target.value)}
                                    className="radio"
                                />
                                {t("no")}
                            </label>
                        </div>

                    </div>


                    {checkValue === "yes" &&
                        <div className="flex items-center gap-3">
                            <label className="label">
                                <span className="label-text">{t("child_count")}</span>
                            </label>
                            <FaPlus onClick={handleIncreseCount} className="cursor-pointer" />
                            <p>{count}</p>
                            <FaMinus onClick={handleDecreseCount} className={count > 1 && "cursor-pointer"} />
                        </div>
                    }


                    {/* Actual Investment */}
                    <div>
                        <label className="label">
                            <span className="label-text">{t("investment_amount")}</span>
                        </label>

                        <input
                            type="number"
                            name="investment"
                            value={formData.investment}
                            onChange={handleChange}
                            placeholder={t("investment_entry")}
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Salary */}
                    <div>
                        <label className="label">
                            <span className="label-text">{t("salary")}</span>
                        </label>

                        <input
                            type="number"
                            name="salary"
                            value={formData.salary}
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