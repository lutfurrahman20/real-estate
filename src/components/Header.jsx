import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import { useDarkMode } from "./DarkModeContext";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Properties", path: "properties" },
    { link: "Services", path: "services" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav
      className={`${
        darkMode ? "dark bg-black" : "light bg-[#f3f3f3]"
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}
    >
      <div id="logo">
        <img
          src={logo}
          alt="company logo"
          className="lg:w-[150px] w-[120px] dark:invert cursor-pointer"
        />
      </div>
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <li key={path}>
            <Link
              to={path}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 dark:text-white hover:text-blue-500"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
          {isMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md lg:hidden">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer text-gray-800 dark:text-white hover:text-blue-500"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
