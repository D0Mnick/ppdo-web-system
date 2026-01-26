import React from "react";
import logo from "../images/ppdo LOGO.png"; // adjust path if needed
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section className="w-full bg-sky-900 text-white py-12 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div className="flex flex-col items-start space-y-4">
            <img src={logo} alt="PPDO Logo" className="w-10 h-auto mx-auto" />

            <p className="text-gray-300 text-sm">
              The Provincial Planning and Development Office of Northern Samar
              is committed to steering sustainable and inclusive development
              through evidence-based planning and proactive governance.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg text-sky-300 mb-2">Contact Us</h3>
            <p className="text-gray-300 text-sm">
              📍 Brgy. [Address], Northern Samar, Philippines
            </p>
            <p className="text-gray-300 text-sm">📞 (055) 123-4567</p>
            <p className="text-gray-300 text-sm">✉️ info@ppdo.nsam.gov.ph</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg text-sky-300 mb-2">Quick Links</h3>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Vision & Mission
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Projects
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Reports
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-sky-800 hover:bg-sky-600 transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-sky-800 hover:bg-sky-600 transition"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-sky-800 hover:bg-sky-600 transition"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Provincial Planning and Development
          Office - Northern Samar. All rights reserved.
        </div>
      </section>
    </div>
  );
}

export default Footer;
