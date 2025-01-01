import { useState, useEffect } from "react";
import PageNav from "../components/PageNav";

const Gallery = () => {
  const images = [
    "Black_Goldish_stone_kitcen_top",
    "Black_Goldish_stone",
    "Black_Stone_2",
    "Black_Stone_Sink",
    "Bllack_Stone_kitchen",
    "kitchen_black_1",
    "kitchen_black",
    "kitchen_gray",
    "kitchen_gray_1",
    "kitchen_white_1",
    "kitchen_white_2",
    "kitchen_white_3",
    "kitchen_white_4",
    "kitchen_white_5",
    "kitchen_white_6",
    "sanple_1",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <PageNav />

      <div className="flex-1 flex flex-col justify-between py-4">
        <div className="text-center mb-3">
          <p className="text-xl md:text-2xl font-semibold">
            Here you can observe some of our projects.
          </p>
        </div>

        <div className="text-center px-4 mb-4">
          <p className="text-sm md:text-base">
            Please use our partner tools to &nbsp;
            <a
              href="https://noblestone.uk/visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#001b5e] text-gray-100 rounded-lg p-2 inline-block md:p-3 transition-transform transform hover:scale-105"
              title="Product Visualization"
              style={{
                display: "inline-block",
                maxWidth: "100%",
                overflowWrap: "break-word",
                textAlign: "center",
              }}
            >
              Visualise Your Dream Stone
            </a>
          </p>
        </div>

        <div className="relative w-full flex-1 max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              height: isMobile ? "calc(100vh - 200px)" : "calc(100vh - 160px)",
            }}
          >
            {images.map((image, index) => (
              <img
                key={image}
                src={`/images/Gallery/${image}.jpg`} // Reference images in public/images/Gallery/
                alt={`Slide ${index}`}
                loading="lazy"
                className={`w-full object-cover flex-shrink-0 cursor-pointer ${
                  currentIndex === index
                    ? "scale-100 opacity-100"
                    : "opacity-50 blur-md"
                } transition-all duration-300`}
                style={{
                  height: "100%",
                }}
              />
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prevImage}
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none bg-opacity-50 ${
              isMobile ? "block" : "hidden md:block"
            }`}
            style={{ fontSize: "2em" }}
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none bg-opacity-50 ${
              isMobile ? "block" : "hidden md:block"
            }`}
            style={{ fontSize: "2em" }}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
