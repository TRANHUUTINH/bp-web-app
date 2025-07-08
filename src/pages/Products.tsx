  import { useState } from "react";
  import { useTranslation } from "react-i18next";
  import ProductGallery from "../components/ProductGallery";
  import { Menu, X } from "lucide-react";

  const Products = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState("carton");

    const categories = [
      "carton",
      "polybag",
      "hangtag",
      "carelabel",
      "sticker",
      "wovenlabel",
      "box",
      "accessories",
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const imageMap: Record<string, string[]> = {
      carton: [
        "/assets/products/thung 1.png",
        "/assets/products/thung 2.png",
        "/assets/products/thung 3.png",
        "/assets/products/thung 4.png",
        "/assets/products/thung 5.png",
        "/assets/products/thung 6.png",
        "/assets/products/thung 7.png",
        "/assets/products/11.png",
        "/assets/products/19.png",
        "/assets/products/20.png",
        "/assets/products/17.png",
        "/assets/products/Layout_cartton.png",
      ],
      polybag: [
        "/assets/products/bao 2.png",
        "/assets/products/bao con cưng.png",
        "/assets/products/polybag_1.png",
        "/assets/products/polybag_2.png",
        "/assets/products/polybag_3.png",
        "/assets/products/polybag_4.png",
        "/assets/products/polybag_5.png",
        "/assets/products/polybag_6.png",
        "/assets/products/Layout_cartton_poly.png",
        "/assets/products/Layout_pb.png",
        "/assets/products/Layout_poly.png",
        "/assets/products/Layout_poly_2.png",
      ],
      hangtag: [
        "/assets/products/hangtag 1.png",
        "/assets/products/hangtag 2.png",
        "/assets/products/hangtag 3.png",
        "/assets/products/hangtag 4.png",
        "/assets/products/hangtag 5.png",
        "/assets/products/hangtag 6.png",
        "/assets/products/hangtag 7.png",
        "/assets/products/hangtag 8.png",
        "/assets/products/hangtag 9.png",
        "/assets/products/hangtag 10.png",
        "/assets/products/hangtag 11.png",
        "/assets/products/hangtag.png",
      ],
      carelabel: [
        "/assets/products/care_2.png",
        "/assets/products/care_3.png",
        "/assets/products/care_4.png",
        "/assets/products/care_7.png",
        "/assets/products/care_8.png",
        "/assets/products/care_9.png",
        "/assets/products/care_10.png",
        "/assets/products/care_11.png",
        "/assets/products/care_12.png",
        "/assets/products/Layout_care.png",
        "/assets/products/Layout_care_2.png",
        "/assets/products/Layout_care_3.png",
      ],
      sticker: [
        "/assets/products/sticker 1.png",
        "/assets/products/sticker 2.png",
        "/assets/products/sticker 3.png",
        "/assets/products/sticker_1.png",
        "/assets/products/sticker_2.png",
        "/assets/products/sticker_3.png",
        "/assets/products/sticker_4.png",
        "/assets/products/sticker_5.png",
        "/assets/products/Layout_sticker_1.png",
        "/assets/products/Layout_sticker.png",
        "/assets/products/sticker_6.png",
        "/assets/products/sticker_7.png",
      ],
      wovenlabel: [
        "/assets/products/woven_label_1.png",
        "/assets/products/woven_label_2.png",
        "/assets/products/woven_label_3.png",
        "/assets/products/woven_label_4.png",
        "/assets/products/woven_label_5.png",
        "/assets/products/dêt.png",
        "/assets/products/Layout_det.png",
        "/assets/products/Layout_det_2.png",
        "/assets/products/Layout_det_3.png",
        "/assets/products/Layout_det_4.png",
        "/assets/products/woven_label_6.png",
        "/assets/products/woven_label_7.png",
      ],
      box: [
        "/assets/products/hop 1.png",
        "/assets/products/hop 2.png",
        "/assets/products/hop 3.png",
        "/assets/products/hop 4.png",
        "/assets/products/hop 5.png",
        "/assets/products/hop 6.png",
        "/assets/products/hop 7.png",
        "/assets/products/hop 8.png",
        "/assets/products/hop 9.png",
        "/assets/products/hop 10.png",
        "/assets/products/hop_10.png",
        "/assets/products/hop_9.png",
      ],
      accessories: [
        "/assets/products/sổ.png",
        "/assets/products/băng keo.png",
        "/assets/products/phu_lieu.png",
        "/assets/products/phu_lieu_2.png",
        "/assets/products/phu_lieu_3.png",
        "/assets/products/phu_lieu_4.png",
        "/assets/products/phu_lieu_1.png",
        "/assets/products/bang_keo.png",
      ],
    };

    const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
      setMenuOpen(false); // 
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
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
            {t("products.title")}
          </button>
        </div>
        <div className="md:w-1/4 w-full">
          {menuOpen && (
            <div className="md:hidden flex flex-col gap-2 mb-4 bg-gray-100 p-4 rounded-xl shadow">
              {categories.map((key) => (
                <button
                  key={key}
                  onClick={() => handleCategoryClick(key)}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium border
                    ${
                      selectedCategory === key
                        ? "bg-green-600 text-white"
                        : "bg-white text-green-800 border-green-500"
                    }
                    hover:bg-green-500 hover:text-white transition`}
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
                className={`w-full h-14 md:h-20 rounded-xl text-sm font-medium border shadow-md
                  ${
                    selectedCategory === key
                      ? "bg-green-600 text-white"
                      : "bg-white text-green-800 border-green-500"
                  }
                  hover:bg-green-500 hover:text-white transition`}
              >
                {t(`products.categories.${key}.name`)}
              </button>
            ))}
          </div>
        </div>
        <div className="md:w-3/4 w-full" id={selectedCategory}>
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-2">
              {t(`products.categories.${selectedCategory}.name`)}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
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
