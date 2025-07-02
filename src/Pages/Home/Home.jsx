import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CartSideBar from "./CartSideBar";
import { Link } from "react-router-dom";

const Home = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  return (
    <div className="bg-gray-50 font-sans">
      {/* Header */}
      <Header onCartClick={openCart} />

      {/* Main */}
      <div className="relative bg-pink-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-pink-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block text-primary">New Collection</span>
                    <span className="block text-accent">Spring 2025</span>
                  </h2>
                  <p className="mt-3 text-base text-dark sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Discover our latest arrivals for women and girls. Fresh
                    styles for every occasion.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        to="/products"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary md:py-4 md:text-lg md:px-10"
                      >
                        Shop Now
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-pink-200 hover:bg-pink-300 md:py-4 md:text-lg md:px-10"
                      >
                        View Lookbook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Fashion model"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <a
            href="#"
            className="group relative block bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Metals"
              className="w-full h-64 object-cover transition-opacity group-hover:opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-xl font-semibold text-white">Metals</h3>
              <p className="mt-1 text-sm text-gray-300">Shop Now</p>
            </div>
          </a>
          <a
            href="#"
            className="group relative block bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
              alt="Iron Sheets"
              className="w-full h-64 object-cover transition-opacity group-hover:opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-xl font-semibold text-white">Iron Sheets</h3>
              <p className="mt-1 text-sm text-gray-300">Shop Now</p>
            </div>
          </a>
          <a
            href="#"
            className="group relative block bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
              alt="Steel Bar"
              className="w-full h-64 object-cover transition-opacity group-hover:opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-xl font-semibold text-white">Steel Bar</h3>
              <p className="mt-1 text-sm text-gray-300">Shop Now</p>
            </div>
          </a>
          <a
            href="#"
            className="group relative block bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Girls' shoes"
              className="w-full h-64 object-cover transition-opacity group-hover:opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-xl font-semibold text-white">Pipes</h3>
              <p className="mt-1 text-sm text-gray-300">Shop Now</p>
            </div>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
            Featured Products
          </h2>
          <div className="flex space-x-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-accent focus:border-accent">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
            </div>
            <button className="p-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
              <i className="fas fa-filter"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                alt="Tube 40/40"
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-2 right-2">
                <button className="p-2 rounded-full bg-white text-gray-700 hover:bg-pink-100 hover:text-accent transition-colors duration-300">
                  <i className="far fa-heart"></i>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span className="text-xs font-semibold text-white">
                  New Arrival
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Tube 40/40
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Metals</p>
                </div>
                <p className="text-sm font-medium text-accent">$39.99</p>
              </div>
              <div className="mt-4">
                <button className="w-full bg-accent hover:bg-primary text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                alt="Iron Sheets"
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-2 right-2">
                <button className="p-2 rounded-full bg-white text-gray-700 hover:bg-pink-100 hover:text-accent transition-colors duration-300">
                  <i className="far fa-heart"></i>
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Azinc
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Iron Sheets</p>
                </div>
                <p className="text-sm font-medium text-accent">$29.99</p>
              </div>
              <div className="mt-4">
                <button className="w-full bg-accent hover:bg-primary text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                alt="Steel bar"
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-2 right-2">
                <button className="p-2 rounded-full bg-white text-gray-700 hover:bg-pink-100 hover:text-accent transition-colors duration-300">
                  <i className="far fa-heart"></i>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span className="text-xs font-semibold text-white">
                  Bestseller
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Ferabeto 12
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Steel Bar</p>
                </div>
                <p className="text-sm font-medium text-accent">$49.99</p>
              </div>
              <div className="mt-4">
                <button className="w-full bg-accent hover:bg-primary text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Pipes"
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-2 right-2">
                <button className="p-2 rounded-full bg-white text-gray-700 hover:bg-pink-100 hover:text-accent transition-colors duration-300">
                  <i className="far fa-heart"></i>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span className="text-xs font-semibold text-white">Sale</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      PVC PN6 110
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Pipes</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-accent">$24.99</p>
                  <p className="text-xs text-gray-500 line-through">$34.99</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full bg-accent hover:bg-primary text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* View All Products Button */}
        <div className="mt-12 text-center">
          <Link to="/products">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100">
              View All Products
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </Link>
        </div>
      </div>

      {/* footer */}
      <Footer />

      {/* cart */}
      <CartSideBar isOpen={cartOpen} onClose={closeCart} />
    </div>
  );
};

export default Home;
