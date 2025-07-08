import { useTranslation } from "react-i18next"; 

const certificates = [
  {
    titleKey: "cert_grs",
    image: "/Certificate/GRS.jpg",
    pdf: "/Certificate/GRS_192970_B.P PRODUCE TRADING COMPANY LIMITED_SC GRS_C-0024528 2024.pdf",
  },
  {
    titleKey: "cert_epi",
    image: "/Certificate/EPI.jpg",
    pdf: "/Certificate/EPI certificate.pdf",
  },
];

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Company Info */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          {t("about.title")}
        </h1>
        <p className="text-green-800">{t("about.intro")}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 list-none p-0">
          <li className="bg-green-50 p-4 rounded-lg shadow-md text-green-800">
            📦 <strong>{t("about.product1")}</strong>
          </li>
          <li className="bg-green-50 p-4 rounded-lg shadow-md text-green-800">
            🛍️ <strong>{t("about.product2")}</strong>
          </li>
          <li className="bg-green-50 p-4 rounded-lg shadow-md text-green-800">
            🏷️ <strong>{t("about.product3")}</strong>
          </li>
        </ul>
        <p className="text-green-800 mt-6">{t("about.experience")}</p>
      </section>

      {/* Core Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-green-800">
          {t("about.core_values_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            ["🎯", "mission_title", "mission_text"],
            ["🚀", "vision_title", "vision_text"],
            ["💡", "innovation_title", "innovation_text"],
            ["🌱", "sustain_title", "sustain_text"],
            ["🤝", "customer_title", "customer_text"],
            ["⚙️", "quality_title", "quality_text"],
          ].map(([icon, titleKey, textKey], i) => (
            <div
              key={i}
              className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-110"
            >
              <h3 className="text-xl font-bold mb-2 text-green-800">
                {icon} {t(`about.${titleKey}`)}
              </h3>
              <p className="text-green-800">{t(`about.${textKey}`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-green-800">
          {t("about.certificates_title")}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-110 w-64 text-green-800"
            >
              <img
                src={cert.image}
                alt={t(cert.titleKey)}
                className="w-32 h-auto mb-4"
              />
              <h3 className="text-center font-semibold">
                {t(cert.titleKey)}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* Customer Benefits */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-green-800">
          {t("about.benefits_title")}
        </h2>
        <ul className="flex flex-wrap justify-center gap-6 p-0">
          {[
            ["🚚", "benefit1"],
            ["🔄", "benefit2"],
            ["💯", "benefit3"],
          ].map(([icon, key], i) => (
            <li
              key={i}
              className="flex-1 min-w-[250px] max-w-sm bg-green-50 text-center p-4 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-110 list-none text-green-800"
            >
              <strong>
                {icon} {t(`about.${key}`)}
              </strong>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
