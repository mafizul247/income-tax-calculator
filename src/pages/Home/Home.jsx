import { useTranslation } from "react-i18next";
import TaxForm from "../TaxForm/TaxForm";

const Home = () => {
    const { t } = useTranslation();

    const categories2025 = [
        { label: t("general"), limit: "৳3,50,000" },
        { label: t("female"), limit: "৳4,00,000" },
        { label: t("disabled"), limit: "৳4,75,000" },
        { label: t("freedom"), limit: "৳5,00,000" },
    ];

    const categories2026 = [
        { label: t("general"), limit: "৳4,00,000" },
        { label: t("female"), limit: "৳4,50,000" },
        { label: t("disabled"), limit: "৳5,25,000" },
        { label: t("freedom"), limit: "৳5,50,000" },
    ];

    const faqs = [
        { q: t("faq_q1"), a: t("faq_a1") },
        { q: t("faq_q2"), a: t("faq_a2") },
        { q: t("faq_q3"), a: t("faq_a3") },
        { q: t("faq_q4"), a: t("faq_a4") },
        { q: t("faq_q5"), a: t("faq_a5") },
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

            {/* ---------------- Tax slab reference tables ---------------- */}
            <section className="max-w-3xl mx-auto px-4 mt-14">
                <h2 className="text-xl font-bold mb-4">{t("slabs_title")}</h2>

                <div className="overflow-x-auto mb-8">
                    <h3 className="font-semibold mb-2">{t("slabs_2025_26_title")}</h3>
                    <table className="table table-zebra bg-base-100 rounded-lg">
                        <thead>
                            <tr>
                                <th>{t("slab_col_category")}</th>
                                <th>{t("slab_col_limit")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories2025.map((row) => (
                                <tr key={row.label}>
                                    <td>{row.label}</td>
                                    <td>{row.limit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-sm opacity-70 mt-2">
                        {t("slab_col_rate")}: {t("slab_rate_desc_2025")}
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <h3 className="font-semibold mb-2">{t("slabs_2026_27_title")}</h3>
                    <table className="table table-zebra bg-base-100 rounded-lg">
                        <thead>
                            <tr>
                                <th>{t("slab_col_category")}</th>
                                <th>{t("slab_col_limit")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories2026.map((row) => (
                                <tr key={row.label}>
                                    <td>{row.label}</td>
                                    <td>{row.limit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-sm opacity-70 mt-2">
                        {t("slab_col_rate")}: {t("slab_rate_desc_2026")}
                    </p>
                </div>
            </section>

            {/* ---------------- FAQ (kept in sync with the FAQPage JSON-LD in index.html) ---------------- */}
            <section className="max-w-3xl mx-auto px-4 mt-14 mb-16">
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
