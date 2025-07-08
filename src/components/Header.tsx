import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-green-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <img src="/assets/logo/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-green-800 font-medium">
          <li>
            <Link to="/" className="hover:text-green-600 transition">
              {t("header.home")}
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-600 transition">
              {t("header.about_us")}
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-green-600 transition">
              {t("header.our_products")}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600 transition">
              {t("header.contact")}
            </Link>
          </li>
        </ul>

        {/* Language dropdown */}
        <div className="relative ml-4">
          <button
            className="text-xl cursor-pointer"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen ? "true" : "false"}
            title={t("header.change_language")}
          >
            🌍
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white border border-green-200 rounded-md shadow-lg z-10 transition-all duration-300 transform">
              <li>
                <button
                  onClick={() => changeLanguage("vi")}
                  className="w-full text-left px-4 py-2 hover:bg-green-100"
                >
                  🇻🇳 {t("header.language.vi")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("en")}
                  className="w-full text-left px-4 py-2 hover:bg-green-100"
                >
                  🇺🇸 {t("header.language.en")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("zh")}
                  className="w-full text-left px-4 py-2 hover:bg-green-100"
                >
                  🇨🇳 {t("header.language.zh")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("ja")}
                  className="w-full text-left px-4 py-2 hover:bg-green-100"
                >
                  🇯🇵 {t("header.language.ja")}
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden ml-2">
          <button
            onClick={toggleMobileMenu}
            className="text-green-800 hover:text-green-600 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white px-4 py-4 space-y-3 text-green-800 font-medium shadow-md">
          <li>
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block hover:text-green-600"
            >
              {t("header.home")}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block hover:text-green-600"
            >
              {t("header.about_us")}
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={closeMobileMenu}
              className="block hover:text-green-600"
            >
              {t("header.our_products")}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block hover:text-green-600"
            >
              {t("header.contact")}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Header;
