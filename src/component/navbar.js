import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { images } from "../utils/index"; // تصاویر لوگو، جستجو و سبد خرید
import { navLists } from "../constants/index"; // لیست ناوبری

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // مدیریت اسکرول صفحه هنگام باز بودن منوی موبایل
    if (isMenuOpen && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <header className="w-full bg-black text-white fixed top-0 left-0 z-50 md:!position-unset">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-5">
        {/* Apple Logo */}
        <div className="flex items-center">
          <img
            src={images.appleImg}
            className="w-6 h-6 sm:w-8 sm:h-8 transition-transform hover:scale-110"
          />
          <span className="ml-2 text-lg font-semibold">Apple</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden block focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isMenuOpen}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Menu */}
        <div
          role="dialog"
          aria-modal="true"
          className={`fixed inset-0 bg-black bg-opacity-90 lg:static lg:bg-transparent
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:block lg:relative flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-6 lg:space-y-0 lg:space-x-6`}>
          {/* Close Button for Mobile */}
          <button
            className="lg:hidden absolute top-4 right-4 text-white"
            onClick={toggleMenu}
            aria-label="بستن منو">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {navLists.map((nav) => (
            <Link
              key={nav.path}
              to={nav.path}
              className={`
                ${
                  window.location.pathname === nav.path
                    ? "text-blue-500 font-bold"
                    : ""
                }
                text-lg lg:text-base text-white hover:text-gray-100 transition-colors duration-200`}
              onClick={toggleMenu}>
              {nav.label}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <img
            src={images.searchImg}
            alt="آیکون جستجو"
            aria-label="جستجو"
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:scale-110 transition-transform"
          />
          <img
            src={images.bagImg}
            alt="آیکون سبد خرید"
            aria-label="سبد خرید"
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:scale-110 transition-transform"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
