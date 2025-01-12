import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";

export const Footer = () => {
  const footerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const links = linksRef.current;

    if (footer && links) {
      // Subtle background animation
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });

      tl.to(footer, {
        backgroundColor: "#1e1e1e",
        duration: 3,
        ease: "power1.inOut",
      });

      // Links hover and interaction animation
      gsap.utils.toArray(".footer-link").forEach((link) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            color: "#0a84ff",
            scale: 1.05,
            duration: 0.3,
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            color: "#ffffff",
            scale: 1,
            duration: 0.3,
          });
        });
      });
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#1e1e1e] text-white py-8 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={linksRef} className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="#"
              className="footer-link text-sm opacity-80 hover:opacity-100">
              Find a Store
            </a>
            <a
              href="#"
              className="footer-link text-sm opacity-80 hover:opacity-100">
              Shop Online
            </a>
            <a
              href="#"
              className="footer-link text-sm opacity-80 hover:opacity-100">
              Support
            </a>
          </div>

          <div className="text-center mb-4">
            <p className="text-xs text-gray-400 mb-2">
              More ways to shop:{" "}
              <span className="footer-link text-[#0a84ff] cursor-pointer">
                Find an Apple Store
              </span>{" "}
              or{" "}
              <span className="footer-link text-[#0a84ff] cursor-pointer">
                other retailer
              </span>{" "}
              near you.
            </p>
            <p className="text-xs text-gray-500">
              © 2024 Apple Inc. All rights reserved.
            </p>
          </div>

          <div className="w-full border-t border-gray-700 pt-4 mt-4 text-center">
            <div className="flex justify-center items-center space-x-2 text-gray-400 text-xs">
              <a
                href="#"
                className="footer-link hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="footer-link hover:text-white transition-colors">
                Terms of Use
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="footer-link hover:text-white transition-colors">
                Sales and Refunds
              </a>
            </div>
            <ChevronDown
              className="mx-auto mt-4 text-gray-500 animate-bounce"
              size={20}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
