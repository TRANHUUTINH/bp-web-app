import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup"; // 👈 import thư viện đếm số

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 19000,
    fade: true,
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full overflow-hidden">
        <Slider {...settings}>
          <div>
            <video autoPlay loop muted className="w-full h-[70vh] object-cover">
              <source src="/assets/video/Carton.mp4" type="video/mp4" />
              {t("home_content.video_not_supported")}
            </video>
          </div>
          <div>
            <video autoPlay loop muted className="w-full h-[70vh] object-cover">
              <source src="/assets/video/clip3.mp4" type="video/mp4" />
              {t("home_content.video_not_supported")}
            </video>
          </div>
          <div>
            <video autoPlay loop muted className="w-full h-[70vh] object-cover">
              <source src="/assets/video/bao2.mp4" type="video/mp4" />
              {t("home_content.video_not_supported")}
            </video>
          </div>
        </Slider>

        {/* Banner text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t("home_content.hero_title")}
          </h1>
          <p className="text-lg md:text-xl mb-6">
            {t("home_content.hero_subtitle")}
          </p>
          <button
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition"
            onClick={() => navigate("/products")}
          >
            {t("home_content.cta")}
          </button>
        </div>
      </div>

      {/* About */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-800">
          {t("home_content.about_title")}
        </h2>
        <p className="text-green-900">{t("home_content.about_text")}</p>
      </section>

      {/* Số liệu đếm động */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-green-700">
              <CountUp end={15} duration={3} />+
            </h3>
            <p className="text-gray-600 mt-2">{t("stats.experience")}</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-700">
              <CountUp end={100} duration={3} />+
            </h3>
            <p className="text-gray-600 mt-2">{t("stats.employees")}</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-700">
              <CountUp end={200} duration={3} />+
            </h3>
            <p className="text-gray-600 mt-2">{t("stats.customers")}</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-700">
              <CountUp end={1000} duration={3} />+
            </h3>
            <p className="text-gray-600 mt-2">{t("stats.projects")}</p>
          </div>
        </div>
      </section>

      {/* Đối tác */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8 text-green-800">
            {t("home_content.partners_title")}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <img
              src="/assets/logo/jamiekay.png"
              alt="Jemika"
              className="h-16 md:h-20 object-contain"
            />
            <img
              src="/assets/logo/NAC-removebg-preview.png"
              alt="Nice"
              className="h-16 md:h-20 object-contain"
            />
            <img
              src="/assets/logo/Ck-removebg-preview.png"
              alt="CK"
              className="h-16 md:h-20 object-contain"
            />
            <img
              src="/assets/logo/adidas-removebg-preview.png"
              alt="Adidas"
              className="h-16 md:h-20 object-contain"
            />
            <img
              src="/assets/logo/nike-removebg-preview.png"
              alt="Tommy"
              className="h-16 md:h-20 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
