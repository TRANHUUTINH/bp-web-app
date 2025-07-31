import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProductGallery from "../components/ProductGallery";
import { Menu, X } from "lucide-react";

const Products = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("carton");
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "carton",
    "cathouse",
    "polybag",
    "hangtag",
    "carelabel",
    "wovenlabel",
    "box",
    "sticker",
    "accessories",
  ];

  const categoryColors: Record<string, string> = {
    carton: "bg-red-500",
    cathouse: "bg-green-500",
    polybag: "bg-violet-600",
    hangtag: "bg-amber-500",
    carelabel: "bg-cyan-300",
    wovenlabel: "bg-pink-500",
    box: "bg-teal-400",
    sticker: "bg-gray-500",
    accessories: "bg-blue-800",
  };

  const imageMap: Record<string, string[]> = {
    carton: [
      "/assets/products/bp_carton-1.png",
      "/assets/products/bp_carton-2.png",
      "/assets/products/bp_carton-3.png",
      "/assets/products/bp_carton-4.png",
      "/assets/products/bp_carton-5.png",
      "/assets/products/bp_carton-6.png",
      "/assets/products/bp_carton-7.png",
      "/assets/products/bp_carton-8.png",
      "/assets/products/bp_carton-9.png",
      "/assets/products/bp_carton-10.png",
      "/assets/products/bp_carton-11.png",
      "/assets/products/bp_carton-12.png",
    ],
    cathouse: [
      "/assets/products/bp_cat house_1.png",
      "/assets/products/bp_cat house_2.png",
      "/assets/products/bp_cat house_3.png",
      "/assets/products/bp_cat house_4.png",
      "/assets/products/bp_cat house_5.png",
      "/assets/products/bp_cat house_6.png",
      "/assets/products/bp_cat house_7.png",
      "/assets/products/bp_cat house_8.png",
      "/assets/products/bp_cat house_9.png",
      "/assets/products/bp_cat house_10.png",
      "/assets/products/bp_cat house_11.png",
      "/assets/products/bp_cat house_12.png",
    ],
    polybag: [
      "/assets/products/bp_polybag-1.png",
      "/assets/products/bp_polybag-2.png",
      "/assets/products/bp_polybag-3.png",
      "/assets/products/bp_polybag-4.png",
      "/assets/products/bp_polybag-5.png",
      "/assets/products/bp_polybag-6.png",
      "/assets/products/bp_polybag-7.png",
      "/assets/products/bp_polybag-8.png",
      "/assets/products/bp_polybag-9.png",
      "/assets/products/bp_polybag-10.png",
      "/assets/products/bp_polybag-11.png",
      "/assets/products/bp_polybag-12.png",
    ],
    hangtag: [
      "/assets/products/bp_hangtag-1.png",
      "/assets/products/bp_hangtag-2.png",
      "/assets/products/bp_hangtag-3.png",
      "/assets/products/bp_hangtag-4.png",
      "/assets/products/bp_hangtag-5.png",
      "/assets/products/bp_hangtag-6.png",
      "/assets/products/bp_hangtag-7.png",
      "/assets/products/bp_hangtag-8.png",
      "/assets/products/bp_hangtag-9.png",
      "/assets/products/bp_hangtag-10.png",
      "/assets/products/bp_hangtag-11.png",
      "/assets/products/bp_hangtag-12.png",
    ],
    carelabel: [
      "/assets/products/bp_carelabel-1.png",
      "/assets/products/bp_carelabel-2.png",
      "/assets/products/bp_carelabel-3.png",
      "/assets/products/bp_carelabel-4.png",
      "/assets/products/bp_carelabel-5.png",
      "/assets/products/bp_carelabel-6.png",
      "/assets/products/bp_carelabel-7.png",
      "/assets/products/bp_carelabel-8.png",
      "/assets/products/bp_carelabel-9.png",
      "/assets/products/bp_carelabel-10.png",
      "/assets/products/bp_carelabel-11.png",
      "/assets/products/bp_carelabel-12.png",
    ],
    sticker: [
      "/assets/products/bp_sticker-1.png",
      "/assets/products/bp_sticker-2.png",
      "/assets/products/bp_sticker-3.png",
      "/assets/products/bp_sticker-4.png",
      "/assets/products/bp_sticker-5.png",
      "/assets/products/bp_sticker-6.png",
      "/assets/products/bp_sticker-7.png",
      "/assets/products/bp_sticker-8.png",
      "/assets/products/bp_sticker-9.png",
      "/assets/products/bp_sticker-10.png",
      "/assets/products/bp_sticker-11.png",
      "/assets/products/bp_sticker-12.png",
    ],
    wovenlabel: [
      "/assets/products/bp_wovenlabel-1.png",
      "/assets/products/bp_wovenlabel-2.png",
      "/assets/products/bp_wovenlabel-3.png",
      "/assets/products/bp_wovenlabel-4.png",
      "/assets/products/bp_wovenlabel-5.png",
      "/assets/products/bp_wovenlabel-6.png",
      "/assets/products/bp_wovenlabel-7.png",
      "/assets/products/bp_wovenlabel-8.png",
      "/assets/products/bp_wovenlabel-9.png",
      "/assets/products/bp_wovenlabel-10.png",
      "/assets/products/bp_wovenlabel-11.png",
      "/assets/products/bp_wovenlabel-12.png",
    ],
    box: [
      "/assets/products/bp_box-1.png",
      "/assets/products/bp_box-2.png",
      "/assets/products/bp_box-3.png",
      "/assets/products/bp_box-4.png",
      "/assets/products/bp_box-5.png",
      "/assets/products/bp_box-6.png",
      "/assets/products/bp_box-7.png",
      "/assets/products/bp_box-8.png",
      "/assets/products/bp_box-9.png",
      "/assets/products/bp_box-10.png",
      "/assets/products/bp_box-11.png",
      "/assets/products/bp_box-12.png",
    ],
    accessories: [
      "/assets/products/bp_other products-1.png",
      "/assets/products/bp_other products-2.png",
      "/assets/products/bp_other products-3.png",
      "/assets/products/bp_other products-4.png",
      "/assets/products/bp_other products-5.png",
      "/assets/products/bp_other products-6.png",
      "/assets/products/bp_other products-7.png",
      "/assets/products/bp_other products-8.png",
      "/assets/products/bp_other products-9.png",
      "/assets/products/bp_other products-10.png",
      "/assets/products/bp_other products-11.png",
      "/assets/products/bp_other products-12.png",
    ],
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setMenuOpen(false);
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-4 md:p-8 flex flex-col md:flex-row gap-6">
      <div className="md:hidden mb-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
          {t("products.title")}
        </button>
      </div>

      <div className="md:w-1/4 w-full">
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-2 mb-4 bg-gray-100 p-4 shadow">
            {categories.map((key) => (
              <button
                key={key}
                onClick={() => handleCategoryClick(key)}
                className={`w-full h-16 text-left px-4 py-3 text-sm font-semibold border-2 shadow-md text-white transition ${
                  selectedCategory === key
                    ? `${categoryColors[key]} border-black`
                    : `${categoryColors[key]} opacity-80 border-transparent`
                }`}
              >
                {t(`products.categories.${key}.name`)}
              </button>
            ))}
          </div>
        )}

        <div className="hidden md:flex flex-col gap-4">
          {categories.map((key) => (
            <button
              key={key}
              onClick={() => handleCategoryClick(key)}
              className={`w-full h-16 md:h-20 text-sm font-semibold border-2 shadow-md text-white transition ${
                selectedCategory === key
                  ? `${categoryColors[key]} border-black`
                  : `${categoryColors[key]} opacity-80 border-transparent`
              }`}
            >
              {t(`products.categories.${key}.name`)}
            </button>
          ))}
        </div>
      </div>

      <div className="md:w-3/4 w-full" id={selectedCategory}>
        <div className="text-center mb-4 md:mb-6">
          <h2
            className={`text-xl md:text-2xl font-bold text-white mb-2 px-4 py-2 inline-block rounded ${categoryColors[selectedCategory]}`}
          >
            {t(`products.categories.${selectedCategory}.name`)}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
          <div className="w-full md:w-1/2 overflow-hidden border border-gray-200 shadow-sm">
            <ProductGallery
              category={selectedCategory}
              images={imageMap[selectedCategory]}
            />
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-green-800 leading-relaxed whitespace-pre-line text-sm md:text-base">
              {t(`products.categories.${selectedCategory}.desc`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
