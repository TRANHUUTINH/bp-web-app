import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <footer className="bg-green-50 text-green-900 py-10 mt-10 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold mb-6 text-center text-green-700">
          {t("footer.contactUs")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base mb-8">
          {/* Cột 1 */}
          <ul className="space-y-2">
            <li>
              🏢 <strong>{t("footer.companyLabel")}:</strong>{" "}
              {t("footer.companyName")}
            </li>

            <li>
              📍 <strong>{t("footer.addressLabel")}:</strong>{" "}
              {t("footer.address")}
            </li>

            <li>
              📞 <strong>{t("footer.hotline")}:</strong> (+84) 907 834 697
            </li>
          </ul>

          {/* Cột 2 */}
          <ul className="space-y-2">
            <li>
              📧 <strong>{t("footer.email")}:</strong> ben@bppackaging.com
            </li>
            <li>
              🌐 <strong>{t("footer.website")}:</strong> www.bp-packaging.com
            </li>
            <li>
              💳 <strong>{t("footer.taxNumber")}:</strong> 0 3 1 3 8 2 5 9 9 3
            </li>
          </ul>
        </div>

        {/* Nút Gửi Yêu Cầu Báo Giá */}
        <div className="text-center">
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition duration-300 shadow-md"
          >
            {t("footer.requestQuote")}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
