import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon issue with React Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Explicitly configure Leaflet marker icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Geolocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  const officeLocation = {
    latitude: 51.5166,
    longitude: 0.3686,
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({ error: error.message });
        }
      );
    } else {
      setLocation({ error: "Geolocation is not supported by your browser." });
    }
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold mb-2">
        Stone Art Design workshop location and Contact details:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-700">Cherry Orchard Farm</p>
          <p className="text-gray-700">Orsett, Grays RM16 3EL</p>
          <p className="text-gray-700">Essex, Great Britain</p>
          <p className="text-gray-700 font-bold">Appointed visit only!</p>
        </div>
        <div>
          <p className="text-gray-700">Phone: +44 7563 366199</p>
          <p className="text-gray-700">Email: info@mystonemaster.co.uk</p>
          <p className="text-gray-700">Website: www.mystonemaster.co.uk</p>
        </div>
      </div>
      {location.error && <p className="text-red-500">{location.error}</p>}
      <div className="w-full h-64 md:h-96">
        <MapContainer
          center={[officeLocation.latitude, officeLocation.longitude]}
          zoom={13}
          className="w-full h-full rounded-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <Marker
            position={[officeLocation.latitude, officeLocation.longitude]}
          >
            <Popup>Our Office Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Geolocation;
