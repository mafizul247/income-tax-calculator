import { useTranslation } from "react-i18next";
import TaxForm from "../TaxForm/TaxForm";

// Number formatter for the reference tables below (independent of user input).
const fmt = (n) => new Intl.NumberFormat("en-US").format(n);

const Home = () => {
    const { t } = useTranslation();

    // ------------------------------------------------------------------
    // Static reference data for the on-page slab tables — mirrors
    // src/utilitis/taxEngine.js exactly, sourced from the NBR circular
    // "আয়কর পরিপত্র ২০২৬-২০২৭" (sections ১.১ / ১.২ / ১.৩) for every
    // period from FY 2026-2027 onward, and the FY 2025-2026 workbook
    // for the oldest period.
    // ------------------------------------------------------------------
    const periods = [
        {
            key: "2030",
            titleKey: "slabs_2030_31_title",
            generalThreshold: 500000,
            brackets: [
                { amount: 300000, rate: 10 },
                { amount: 400000, rate: 15 },
                { amount: 500000, rate: 20 },
                { amount: 2000000, rate: 25 },
                { amount: 26300000, rate: 30 },
            ],
            remainingRate: 35,
            female: 550000,
            disabled: 625000,
            freedom: 650000,
            merged: true,
            flatMinTax: true,
        },
        {
            key: "2028",
            titleKey: "slabs_2028_29_title",
            generalThreshold: 450000,
            brackets: [
                { amount: 300000, rate: 10 },
                { amount: 400000, rate: 15 },
                { amount: 500000, rate: 20 },
                { amount: 2000000, rate: 25 },
                { amount: 26350000, rate: 30 },
            ],
            remainingRate: 35,
            female: 500000,
            disabled: 575000,
            freedom: 600000,
            merged: true,
            flatMinTax: true,
        },
        {
            key: "2026",
            titleKey: "slabs_2026_27_title",
            generalThreshold: 400000,
            brackets: [
                { amount: 300000, rate: 10 },
                { amount: 400000, rate: 15 },
                { amount: 500000, rate: 20 },
                { amount: 2000000, rate: 25 },
            ],
            remainingRate: 30,
            female: 450000,
            disabled: 525000,
            freedom: 550000,
            merged: true,
            flatMinTax: true,
        },
        {
            key: "2025",
            titleKey: "slabs_2025_26_title",
            generalThreshold: 350000,
            brackets: [
                { amount: 100000, rate: 5 },
                { amount: 400000, rate: 10 },
                { amount: 500000, rate: 15 },
                { amount: 500000, rate: 20 },
                { amount: 2000000, rate: 25 },
            ],
            remainingRate: 30,
            female: 400000,
            disabled: 475000,
            freedom: 500000,
            merged: false,
            flatMinTax: false,
        },
    ];

    const faqs = [
        { q: t("faq_q1"), a: t("faq_a1") },
        { q: t("faq_q2"), a: t("faq_a2") },
        { q: t("faq_q3"), a: t("faq_a3") },
        { q: t("faq_q4"), a: t("faq_a4") },
        { q: t("faq_q5"), a: t("faq_a5") },
        { q: t("faq_q6"), a: t("faq_a6") },
    ];

    return (
        <div>
            <title>{t("homeTitle")}</title>
            <meta name="description" content={t("seo_subtitle")} />

            {/* ---------------- Hero / H1 ---------------- */}
            <div className="max-w-3xl mx-auto text-center px-4 pt-6">
                <h1 className="text-2xl md:text-3xl font-bold">{t("welcome")}</h1>
                <p className="mt-3 text-base opacity-80">{t("seo_subtitle")}</p>
            </div>

            {/* ---------------- Calculator ---------------- */}
            <TaxForm />

            {/* ---------------- Benefits ---------------- */}
            <section className="max-w-3xl mx-auto px-4 mt-14">
                <h2 className="text-xl font-bold mb-4">{t("benefits_title")}</h2>
                <ul className="grid sm:grid-cols-2 gap-3 list-disc list-inside text-sm md:text-base opacity-90">
                    <li>{t("benefit_1")}</li>
                    <li>{t("benefit_2")}</li>
                    <li>{t("benefit_3")}</li>
                    <li>{t("benefit_4")}</li>
                </ul>
            </section>

            {/* ---------------- Tax slab reference tables (all 4 periods) ---------------- */}
            <section className="max-w-3xl mx-auto px-4 mt-14">
                <h2 className="text-xl font-bold mb-6">{t("slabs_title")}</h2>

                {periods.map((p) => (
                    <div key={p.key} className="mb-12">
                        <h3 className="font-semibold mb-2">{t(p.titleKey)}</h3>

                        {/* Income slab table */}
                        <div className="overflow-x-auto mb-4">
                            <table className="table table-zebra bg-base-100 rounded-lg">
                                <thead>
                                    <tr>
                                        <th>{t("col_total_income")}</th>
                                        <th>{t("col_tax_rate")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t("slab_first", { amount: fmt(p.generalThreshold) })}</td>
                                        <td>0%</td>
                                    </tr>
                                    {p.brackets.map((b, idx) => (
                                        <tr key={idx}>
                                            <td>{t("slab_next", { amount: fmt(b.amount) })}</td>
                                            <td>{b.rate}%</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td>{t("slab_remaining")}</td>
                                        <td>{p.remainingRate}%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Category-wise tax-free limit */}
                        <div className="bg-base-100 rounded-lg p-4 text-sm md:text-base">
                            <p className="font-medium mb-2">{t("category_exemptions_title")}</p>
                            <ul className="list-decimal list-inside space-y-1 opacity-90">
                                {p.merged ? (
                                    <>
                                        <li>{t("category_point_female", { amount: fmt(p.female) })}</li>
                                        <li>{t("category_point_disabled", { amount: fmt(p.disabled) })}</li>
                                        <li>{t("category_point_freedom", { amount: fmt(p.freedom) })}</li>
                                    </>
                                ) : (
                                    <>
                                        <li>{t("category_female_plain", { amount: fmt(p.female) })}</li>
                                        <li>{t("category_disabled_plain", { amount: fmt(p.disabled) })}</li>
                                        <li>{t("category_freedom_plain", { amount: fmt(p.freedom) })}</li>
                                    </>
                                )}
                            </ul>

                            {p.merged && (
                                <p className="mt-3 opacity-70">{t("disabled_dependent_note")}</p>
                            )}

                            <p className="mt-3 opacity-70">
                                {p.flatMinTax ? t("min_tax_note_flat") : t("min_tax_note_legacy")}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {/* ---------------- FAQ (kept in sync with the FAQPage JSON-LD in index.html) ---------------- */}
            <section className="max-w-3xl mx-auto px-4 mt-4 mb-16">
                <h2 className="text-xl font-bold mb-4">{t("faq_title")}</h2>
                <div className="space-y-2">
                    {faqs.map((item) => (
                        <details key={item.q} className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
                            <summary className="collapse-title font-medium">{item.q}</summary>
                            <div className="collapse-content text-sm opacity-90">
                                <p>{item.a}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
