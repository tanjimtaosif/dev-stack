import { useState } from "react";
import logoText from "../assets/assets/logo-text.png";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

interface NavbarProps {
  activeLink?: string;
}

const Navbar = ({ activeLink = "Home" }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    /* <!-- Navbar Section Start --> */
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* <!-- Mobile Hamburger --> */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>

          {/* <!-- Logo --> */}
          <a href="#" className="flex items-center gap-2">
            <img src={logoText} alt="Dev Stack" className="h-7 md:h-8" />
          </a>

          {/* <!-- Desktop Nav Links --> */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeLink === link
                      ? "bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* <!-- Auth Buttons --> */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white px-5 py-2 rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 transition-opacity"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}
      >
        <ul className="px-4 pb-4 space-y-2 bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`block py-2 text-sm font-medium ${
                  activeLink === link
                    ? "bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent"
                    : "text-gray-600"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    /* <!-- Navbar Section End --> */
  );
};

export default Navbar;
