import { FaPhoneAlt } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { useTranslation } from "react-i18next";

const ContactFloatingButtons = () => {
  const phoneNumber = "+84907834697";
  const zaloNumber = "+84907834697";
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <div className="relative group flex justify-end">
        <div className="tooltip-container">
          <a
            href={`https://zalo.me/${zaloNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg animate-pulse flex items-center justify-center w-14 h-14"
          >
            <SiZalo size={24} />
          </a>
          <div className="tooltip group-hover:opacity-100">
            {t("contacts.zaloTooltip")}
            <div className="tooltip-arrow" />
          </div>
        </div>
      </div>

      <div className="relative group flex justify-end">
        <div className="tooltip-container">
          <a
            href={`tel:${phoneNumber}`}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg animate-pulse flex items-center justify-center w-14 h-14"
          >
            <FaPhoneAlt size={20} />
          </a>
          <div className="tooltip group-hover:opacity-100">
            {t("contacts.callTooltip")}
            <div className="tooltip-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFloatingButtons;
