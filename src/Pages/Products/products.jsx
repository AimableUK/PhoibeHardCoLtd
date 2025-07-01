import React from "react";

const products = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
            All Products
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
                alt="Floral dress"
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
                      Floral Summer Dress
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Women's Dress</p>
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
                alt="Girl's dress"
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
                      Pink Polka Dot Dress
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Girl's Dress</p>
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
                alt="Women's shoes"
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
                      White Sneakers
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Women's Shoes</p>
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
                alt="Girl's shoes"
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
                      Sparkly Sandals
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Girl's Shoes</p>
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
      </div>
    </div>
  );
};

export default products;
