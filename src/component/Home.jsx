import { Link } from "react-router-dom";
import leaf from "../assets/leaf.png";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white mb-3">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 ">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              New
              <span className="text-orange-600 p-4">
                <span className="text-[6rem]">S</span>
                eason.
              </span>
              <br />
              New
              <span className="text-orange-600 p-4">
                <span className="text-[4.2rem]">M</span>
                ood.
              </span>
              <br />
              New
              <span className="text-orange-600 p-4">You.</span>
            </h1>
            <p className="mt-4 flex text-xl text-gray-500">
              It's Time To Turn Over A New Leaf{" "}
              <img src={leaf} alt="Leaf logo" className="ml-1 w-6 " />
            </p>
            <Link
              to="/product"
              className="inline-block rounded-md border border-transparent bg-orange-600 px-8 py-3 text-center font-medium text-white hover:bg-orange-700 mt-4"
            >
              Explore Now 🌿
            </Link>
          </div>
          <div className="mt-10">
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
