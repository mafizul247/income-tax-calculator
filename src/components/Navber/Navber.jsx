import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const Navber = () => {
    const { t, i18n } = useTranslation();

    // Theme toggle
    const toggleTheme = () => {
        const html = document.documentElement;
        const current = html.getAttribute("data-theme");
        html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
    };

    // Language toggle
    const toggleLang = () => {
        const newLang = i18n.language === "en" ? "bn" : "en";
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="navbar bg-base-100/95 backdrop-blur shadow-sm fixed top-0 inset-x-0 z-50">

            <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">

                {/* Logo / Title */}
                <Link to="/" className="text-xl font-bold">
                    {t("tax")}
                </Link>

                {/* Toggles */}
                <div className="flex items-center gap-2">

                    {/* Language */}
                    <button onClick={toggleLang} className="btn btn-sm">
                        {i18n.language === "en" ? "বাং" : "EN"}
                    </button>

                    {/* Theme */}
                    <button onClick={toggleTheme} className="btn btn-sm">
                        🌙
                    </button>

                </div>
            </div>

        </div>
    );
};

export default Navber;