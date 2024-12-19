// src/pages/AboutUs.jsx

import Geolocation from "../components/GeoLocation";
import YouTube from "react-youtube";
import PageNav from "../components/PageNav";

const AboutUs = () => {
  const videoOptions = {
    height: "200",
    width: "100%",
    playerVars: {
      autoplay: 0,
      enablejsapi: 1,
      modestbranding: 1, // Remove YouTube logo
      rel: 0, // Disable related videos
      origin: "https://mystonemaster.co.uk",
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <PageNav />

      <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Geolocation Component */}
        <Geolocation />

        <div className="bg-white shadow-md rounded-lg p-4 mt-4 space-y-4 sm:p-6 sm:mt-6 sm:space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:text-3xl text-center">
            Where we are located?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group">
              <img
                src="/images/AboutUs/Farm_logo.jpg"
                alt="Example_1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="group aspect-w-16 aspect-h-9">
              <YouTube
                videoId="BWPux2mlkdQ"
                opts={videoOptions}
                className="transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="group">
              <img
                src="/images/AboutUs/Our_workshop_outside.jpg"
                alt="Example_1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="group">
              <img
                src="/images/AboutUs/Our_workshop_inside.jpg"
                alt="Example_1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:text-3xl text-center">
            We are using only top rated tools!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group">
              <img
                src="/images/AboutUs/CNC_Machine_arrived.jpg"
                alt="Example_1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="group aspect-w-16 aspect-h-9">
              <YouTube
                videoId="RXF14J0aaao"
                opts={videoOptions}
                className="transition-transform duration-300 group-hover:scale-150"
              />
            </div>

            <div className="group">
              <img
                src="/images/AboutUs/CNC_machine.jpg"
                alt="Example_2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="group">
              <img
                src="/images/AboutUs/Our_tool_station.jpg"
                alt="Example_2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="group">
              <img
                src="/images/AboutUs/Tools_we_are_using.jpg"
                alt="Example_2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="group">
              <img
                src="/images/AboutUs/Cutting_routine.jpg"
                alt="Example_2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:text-3xl text-center">
            We exclusively use outstanding materials!
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="group aspect-w-16 aspect-h-9">
              <YouTube
                videoId="iKM16D0667I"
                opts={videoOptions}
                className="transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="group aspect-w-16 aspect-h-9">
              <img
                src="/images/AboutUs/Black_Orange_Stone.jpg"
                alt="Example_1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="group aspect-w-16 aspect-h-9">
              <img
                src="/images/AboutUs/Stone_Sample.jpg"
                alt="Example_1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="group aspect-w-16 aspect-h-9">
              <img
                src="/images/AboutUs/Storage_2.jpg"
                alt="Example_1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="group aspect-w-16 aspect-h-9">
              <img
                src="/images/AboutUs/Storage.jpg"
                alt="Example_1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>
            <div className="group aspect-w-16 aspect-h-9">
              <img
                src="/images/AboutUs/stone_exhibition.jpg"
                alt="Example_1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
