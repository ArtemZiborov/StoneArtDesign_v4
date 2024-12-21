import { useState, useEffect } from "react";
import PageNav from "../components/PageNav";

const Gallery = () => {
  const images = [
    "images/Gallery/Black_Goldish_stone_kitcen_top.jpg", // Replace with your image URLs
    "images/Gallery/Black_Goldish_stone.jpg",
    "images/Gallery/Black_Stone_2.jpg",
    "images/Gallery/Black_Stone_Sink.jpg",
    "images/Gallery/Bllack_Stone_kitchen.jpg",
    "images/Gallery/kitchen_black_1.jpg",
    "images/Gallery/kitchen_black.jpg",
    "images/Gallery/kitchen_gray.jpg",
    "images/Gallery/kitchen_gray_1.jpg",
    "images/Gallery/kitchen_white_1.jpg",
    "images/Gallery/kitchen_white_2.jpg",
    "images/Gallery/kitchen_white_3.jpg",
    "images/Gallery/kitchen_white_4.jpg",
    "images/Gallery/kitchen_white_5.jpg",
    "images/Gallery/kitchen_white_6.jpg",
    "images/Gallery/sanple_1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to determine mobile or desktop view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set the initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextImage = () => {
    setZoom(false); // Reset zoom when navigating to the next image
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setZoom(false); // Reset zoom when navigating to the previous image
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const toggleZoom = () => {
    if (isMobile) {
      setZoom((prevZoom) => !prevZoom);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <PageNav />

      <div className="flex-1 flex flex-col justify-between py-4">
        <div className="text-center">
          <p className="text-xl md:text-2xl font-semibold">
            Here you can observe some of our projects.
          </p>
        </div>

        <div className="text-center px-4">
          <p>
            Please use our partner tools to &nbsp;
            <a
              href="https://noblestone.uk/visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-lg sm:text-2xl md:text-xl underline"
              title="Product Visualization"
            >
              Visualise Your Dream Stone
            </a>
            .
          </p>
        </div>

        <div className="relative w-full flex-1 max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
          {/* Carousel */}
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              height: "calc(100vh - 160px)",
            }}
          >
            {images.map((image, index) => {
              const isCurrent = currentIndex === index;
              const scaleClass = isCurrent ? (zoom && isMobile ? "scale-130" : "scale-100") : "opacity-50 blur-md";
              return (
                <img
                  key={image}
                  src={image}
                  alt={`Slide ${index}`}
                  className={`w-full object-cover flex-shrink-0 cursor-pointer ${scaleClass} transition-all duration-300`}
                  style={{
                    height: "100%",
                  }}
                  onClick={() => {
                    if (isCurrent) toggleZoom();
                  }}
                  onKeyDown={(e) => {
                    if (isCurrent && (e.key === 'Enter' || e.key === ' ')) toggleZoom();
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={zoom}
                />
              );
            })}
          </div>

          {/* Controls */}
          <button
            onClick={prevImage}
            className="hidden md:block absolute left-2 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none bg-opacity-50"
            style={{ fontSize: "2em" }}
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none bg-opacity-50"
            style={{ fontSize: "2em" }}
          >
            &#8594;
          </button>

          {/* Mobile Controls */}
          <button
            onClick={prevImage}
            className="block md:hidden absolute left-2 top-2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none bg-opacity-50"
            style={{ fontSize: "1.5em" }}
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="block md:hidden absolute right-2 top-2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none bg-opacity-50"
            style={{ fontSize: "1.5em" }}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
