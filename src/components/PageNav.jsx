import { useState } from "react";
import { NavLink } from "react-router-dom";

const logo = "/images/logo.png"; // Adjust the path as necessary

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <NavLink to="/">
            <img src={logo} alt="Stone Art Design Logo" className="h-10 w-10" />
          </NavLink>
          <h1 className="text-2xl font-bold text-white">Stone Art Design</h1>
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-6">
          <span className="text-white flex items-center">
            <i className="fas fa-phone-alt mr-2"></i>+44 7563 366199
          </span>
          <a
            href="mailto:info@mystonemaster.co.uk"
            className="text-white flex items-center"
          >
            <i className="fas fa-envelope mr-2"></i>
            info@mystonemaster.co.uk
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      {/* Social Media Links */}
      <div className="flex space-x-9 mt-4 md:mt-1 mb-3 justify-center">
        <a
          href="https://www.facebook.com/share/9ZUDxR6r2LqBTY4p/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl md:text-xl"
          title="Follow us on Facebook"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/stoneartspecialists/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl md:text-xl"
          title="Follow us on Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://noblestone.uk/visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl md:text-xl"
          title="Product Visualization"
        >
          <i className="fas fa-eye"></i>
        </a>
        <a
          href="https://wa.me/447563366199?text=Hello%20Stone%20Art%20Design"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl md:text-xl"
          title="Chat with us on WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:flex md:items-center md:justify-center w-full mt-4 md:mt-0 md:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-7 items-center text-center text-lg md:text-base">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-xl"
                  : "text-gray-400 text-xl"
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-xl"
                  : "text-gray-400 text-xl"
              }
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/materials"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-xl"
                  : "text-gray-400 text-xl"
              }
              onClick={() => setIsOpen(false)}
            >
              Materials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-xl"
                  : "text-gray-400 text-xl"
              }
              onClick={() => setIsOpen(false)}
            >
              Projects Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-xl"
                  : "text-gray-400 text-xl"
              }
              onClick={() => setIsOpen(false)}
            >
              Price Quote
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default PageNav;
