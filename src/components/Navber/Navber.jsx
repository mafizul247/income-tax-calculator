import { useState } from "react";
import { useTranslation } from "react-i18next";
// import { NavLink } from "react-router";

const Navber = () => {
    const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Theme toggle
  const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");
    html.setAttribute("data-theme", current === "dark" ? "light" : "dark");

    setOpen(false); // close mobile menu
  };

  // Language toggle
  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "bn" : "en";
    i18n.changeLanguage(newLang);

    setOpen(false); // close mobile menu
  };

  // Active link style
//   const navClass = ({ isActive }) => isActive ? "text-primary font-bold" : "";

    return (
        <div className="navbar bg-base-100 shadow relative">

      {/* LEFT */}
      <div className="flex-1">
        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <h1 className="text-xl font-bold">{t("tax")}</h1>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex items-center gap-4">

        {/* <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={navClass}>
              {t("home")}
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navClass}>
              {t("about")}
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navClass}>
              {t("contact")}
            </NavLink>
          </li>
        </ul> */}

        {/* Toggles */}
        <div className="flex items-center gap-2">

          {/* Language */}
          <button onClick={toggleLang} className="btn btn-sm">
            {i18n.language === "en" ? "EN" : "বাং"}
          </button>

          {/* Theme */}
          <button onClick={toggleTheme} className="btn btn-sm">
            🌙
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute top-16 left-0 w-full bg-base-100 shadow lg:hidden z-50 transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="menu p-4">

          {/* <li>
            <NavLink to="/" className={navClass} onClick={() => setOpen(false)}>
              {t("home")}
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navClass} onClick={() => setOpen(false)}>
              {t("about")}
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navClass} onClick={() => setOpen(false)}>
              {t("contact")}
            </NavLink>
          </li> */}

          {/* Toggles */}
          <div className="flex gap-2 mt-3">
            <button onClick={toggleLang} className="btn btn-sm">
              {i18n.language === "en" ? "EN" : "বাং"}
            </button>

            <button onClick={toggleTheme} className="btn btn-sm">
              🌙
            </button>
          </div>

        </ul>
      </div>

    </div>
    );
};

export default Navber;