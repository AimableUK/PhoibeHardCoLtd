import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <Link to="/">
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link to="/products">
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Products
                </a>
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link to="/aboutus">
                <a className="text-base text-gray-500 hover:text-gray-900">
                  About Us
                </a>
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link to="/contactus">
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Contact Us
                </a>
              </Link>
            </div>
          </nav>
          {/* <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-accent">
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-accent">
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter"></i>
          </div> */}
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2025 PHOIBE HARD CO. Ltd . All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
