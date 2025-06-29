import React from "react";

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
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Jobs
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Press
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Accessibility
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Partners
              </a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-accent">
              <span className="sr-only">Facebook</span>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-accent">
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-accent">
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-accent">
              <span className="sr-only">Pinterest</span>
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2023 Fashion Haven. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
