import React from "react";
import image from "../../assets/image.png";
import image2 from "../../assets/image2.png";

const ProductDetail = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Image section */}
        <div className="md:col-span-8 flex flex-col md:flex-row gap-4">
            {/* Main Image */}
          <div className="flex-1 h-[400px]">
            <img
              src={image}
              alt="Main Product"
              className="w-full h-full object-cover rounded shadow-xl"
            />
          </div>
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2 md:gap-4 justify-center md:justify-start">
            {[image2, image, image].map((src, index) => (
              <div
                key={index}
                className="w-[80px] h-[80px] border rounded overflow-hidden shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          
        </div>

        {/* Product Info */}
        <div className="md:col-span-4">
          <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
