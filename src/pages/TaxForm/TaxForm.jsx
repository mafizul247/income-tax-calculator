import { useState } from "react";
import { useTranslation } from "react-i18next";
import { calculateTax } from "../../utilitis/taxEngine";
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

    // Disabled-child benefit only exists in the FY 2026-2027 rules
    const isDisabledChildApplicable = formData.year === "2026";

    const handleYearChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, year: value });

        // Reset the disabled-child inputs when switching to a year that
        // doesn't support this benefit, so stale values never leak in.
        if (value !== "2026") {
            setCheckValue("no");
            setCount(1);
        }
    };

    const handleIncreseCount = () => {
        if (checkValue === "yes") setCount(count + 1);
    };

    const handleDecreseCount = () => {
        if (checkValue === "yes" && count > 1) setCount(count - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const year = parseInt(formData.year); // 2025 (FY 2025-2026) or 2026 (FY 2026-2027)
        const city = parseInt(formData.city);
        const salary = parseInt(formData.salary);
        const investment = parseInt(formData.investment || 0);
        const disabledChildCount =
            isDisabledChildApplicable && checkValue === "yes" ? count : 0;

        const calculated = calculateTax({
            year,
            category: formData.category, // 'general' | 'female' | 'disabled' | 'freedom'
            city,
            salary,
            investment,
            disabledChildCount,
        });

        setResult(calculated);
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
                                onChange={handleYearChange}
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="">{t("financial_year")}</option>
                                <option value="2025">{t("year_2025_26")}</option>
                                <option value="2026">{t("year_2026_27")}</option>
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
                                <option value="general">{t("general")}</option>
                                <option value="female">{t("female")}</option>
                                <option value="disabled">{t("disabled")}</option>
                                <option value="freedom">{t("freedom")}</option>
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

                        {/* Disabled Child Toggle — FY 2026-2027 only */}
                        {isDisabledChildApplicable && (
                            <div>
                                <span className="hidden md:block"><br /></span>
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
                        )}
                    </div>

                    {/* Child Count */}
                    {isDisabledChildApplicable && checkValue === "yes" && (
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
