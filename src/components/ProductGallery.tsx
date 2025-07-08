import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useSwipeable } from "react-swipeable";

type ProductGalleryProps = {
  category: string;
  images: string[];
};

const ProductGallery = ({ category, images }: ProductGalleryProps) => {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setZoomedIndex(index);
  };

  const closeZoom = () => {
    setZoomedIndex(null);
  };

  const goPrev = (e?: React.MouseEvent | MouseEvent) => {
    if (e) e.stopPropagation();
    if (zoomedIndex !== null && zoomedIndex > 0) {
      setZoomedIndex(zoomedIndex - 1);
    }
  };

  const goNext = (e?: React.MouseEvent | MouseEvent) => {
    if (e) e.stopPropagation();
    if (zoomedIndex !== null && zoomedIndex < images.length - 1) {
      setZoomedIndex(zoomedIndex + 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goNext(),
    onSwipedRight: () => goPrev(),
    trackMouse: true,
    onSwiping: (event) => {
      event.event.preventDefault();
    },
  });

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 capitalize"></h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={img}
              alt={`${category}-${index}`}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110 p-2"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl"></div>
          </div>
        ))}
      </div>

      {/* Modal Zoom */}
      {zoomedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={closeZoom}
        >
          <button
            onClick={closeZoom}
            className="absolute top-4 right-4 text-white text-3xl z-50"
          >
            <X size={32} />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full z-50"
          >
            <ChevronLeft size={32} />
          </button>

          <div {...swipeHandlers}>
            <img
              src={images[zoomedIndex]}
              alt={`zoomed-${zoomedIndex}`}
              className="max-w-4xl max-h-[90vh] rounded-xl shadow-lg transition-transform"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            onClick={goNext}
            className="absolute right-4 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full z-50"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
