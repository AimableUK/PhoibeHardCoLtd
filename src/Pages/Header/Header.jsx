import React, { useEffect, useState } from "react";
import PhoibeHardCoLtdLogo from "../../assets/PhoibeHardCoLtdLogo.png";
import { Link } from "react-router-dom";

const Header = ({ onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedMenuItem, setSelectedMenuItem] = useState("home");

  useEffect(() => {
    const pathMap = {
      "/": "home",
      "/products": "products",
      "/aboutus": "aboutus",
      "/contactus": "contactus",
    };
    setSelectedMenuItem(pathMap[location.pathname] || "");
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span>
                  <img
                    src={PhoibeHardCoLtdLogo}
                    alt="Phoibe Hard Co. Ltd Logo"
                    className="size-10"
                  />
                </span>
                <span className="font-semibold text-muted text-2xl">
                  PHOIBE HARD
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className={`${
                  selectedMenuItem === "home" ? "text-primary border-b-4 border-accent" : ""
                } py-4 px-2 text-muted font-semibold`}
              >
                Home
              </Link>

              <Link
                to="/products"
                className={`${
                  selectedMenuItem === "products"
                    ? "text-primary border-b-4 border-accent"
                    : ""
                } py-4 px-2 text-muted font-semibold hover:text-primary transition duration-300`}
              >
                Products
              </Link>

              <Link
                to="/aboutus"
                className={`${
                  selectedMenuItem === "aboutus"
                    ? "text-primary border-b-4 border-accent"
                    : ""
                } py-4 px-2 text-muted font-semibold hover:text-primary transition duration-300`}
              >
                About Us
              </Link>
              <Link
                to="/contactus"
                className={`${
                  selectedMenuItem === "contactus"
                    ? "text-primary border-b-4 border-accent"
                    : ""
                } py-4 px-2 text-muted font-semibold hover:text-primary transition duration-300`}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#"
              className="py-2 px-2 text-muted hover:text-primary transition duration-300"
            >
              <i className="fas fa-search"></i>
            </a>
            <a
              href="#"
              className="py-2 px-2 text-muted hover:text-primary transition duration-300"
            >
              <i className="fas fa-user"></i>
            </a>
            <a
              href="#"
              onClick={onCartClick}
              className="py-2 px-2 text-muted hover:text-primary transition duration-300 relative"
            >
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="outline-none mobile-menu-button"
              aria-label="Toggle Menu"
            >
              <i className="fas fa-bars text-muted text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${menuOpen ? "block" : "hidden"} mobile-menu md:hidden`}>
        <ul>
          <li className="active">
            <Link
              to="/"
              className="block text-sm px-2 py-4 text-white bg-primary font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="block text-sm px-2 py-4 hover:bg-primary hover:text-white transition duration-300"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="block text-sm px-2 py-4 hover:bg-primary hover:text-white transition duration-300"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="block text-sm px-2 py-4 hover:bg-primary hover:text-white transition duration-300"
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
