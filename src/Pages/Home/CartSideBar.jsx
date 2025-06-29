import React from "react";

const CartSideBar = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      {/* Background overlay */}
      <div
        className="bg-gray-500 bg-opacity-75 absolute inset-0"
        onClick={onClose}
      ></div>

      {/* Cart panel */}
      <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900">
                  Shopping cart
                </h2>
                <div className="ml-3 h-7 flex items-center">
                  <button
                    type="button"
                    onClick={onClose}
                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Close panel</span>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>

              {/* Cart Items */}
              <div className="mt-8">
                <ul className="-my-6 divide-y divide-gray-200">
                  {/* Item 1 */}
                  <li className="py-6 flex">
                    <div className="w-24 h-24 border rounded-md overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>Floral Summer Dress</h3>
                        <p>$39.99</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Women's Dress - Size M
                      </p>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="text-gray-500">Qty 1</p>
                        <button className="font-medium text-accent hover:text-primary">
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>

                  {/* Item 2 */}
                  <li className="py-6 flex">
                    <div className="w-24 h-24 border rounded-md overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1549298916-b41d501d3772"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>White Sneakers</h3>
                        <p>$49.99</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Women's Shoes - Size 7
                      </p>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="text-gray-500">Qty 1</p>
                        <button className="font-medium text-accent hover:text-primary">
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$89.98</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex justify-center items-center px-6 py-3 rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-primary transition-all duration-100 ease-in-out"
                >
                  CheckOut
                </a>
              </div>
              <div className="mt-6 flex justify-center text-sm text-gray-500">
                <p>
                  or{" "}
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-accent font-medium hover:text-primary"
                  >
                    Continue Shopping →
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSideBar;
