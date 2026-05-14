import { useState } from "react";
import { useTranslation } from "react-i18next";
import { taxExampted } from "../../utilitis/taxExamption";
import { taxCalculation } from "../../utilitis/taxCalculation";
import ShowTax from "./ShowTax";


const TaxForm = () => {
    const { t } = useTranslation();
    const [result, setResult] = useState(null);
    const [formData, setFormData] = useState({
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


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form Data:", formData);
        const taxPayer = parseInt(formData.category);
        const taxArea = parseInt(formData.city);
        const totalSalary = parseInt(formData.salary);

        const taxExamption = taxExampted(totalSalary);

        const taxableIncome = totalSalary - taxExamption;

        const totalTax = taxCalculation(taxPayer, taxArea, taxableIncome);

        setResult({
            salary: totalSalary,
            exemption: taxExamption,
            taxable: taxableIncome,
            totalTax,
            monthlyTax: totalTax / 12,
            minTax: taxArea,
        });

        /* console.log(taxPayer, taxArea, totalSalary);
        console.log('Taxable', taxableIncome);
        console.log('Tax', totalTax) */

    };


    return (
        <>
            {
                result && <ShowTax result={result} />
            }
            <div className="max-w-xl mx-auto mt-10 p-6 bg-base-200 rounded-xl shadow">

                <h2 className="text-2xl font-bold mb-6 text-center">
                    {t("tax_title")}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

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