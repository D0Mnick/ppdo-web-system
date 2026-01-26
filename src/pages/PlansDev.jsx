import React from "react";
import { motion } from "framer-motion";
import heroImage from "../images/ppdoCover.png";

import Footer from "../layout/Footer";
// import plansPDF from "../pdf/pdfpfp24.pdf";

export default function PlansDev() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Text */}
        <div className="relative z-10 px-4 text-center max-w-3xl">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight drop-shadow-lg">
            Plans & Development Framework
          </h1>
        </div>
      </section>

      {/* Content below hero */}
      <section className="w-full bg-sky-700 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-semibold text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
          >
            Official Provincial Plans and Frameworks that guide Northern Samar’s
            Sustainable and Inclusive Development.
          </motion.h1>
        </div>
      </section>

      {/* Grid Section Template */}
      {[
        {
          title: "Provincial Development and Physical Framework Plan (PDPFP)",
          text: "Add information about your project. You can include success metrics, timelines, and the latest updates. This is linked to a subpage, which you can fill out with even more details about the project.",
        },
        {
          title: "Provincial Development Investment Program",
          text: "Add information about your project. You can include success metrics, timelines, and the latest updates. This is linked to a subpage, which you can fill out with even more details about the project.",
        },
        {
          title: "Annual Investment Plan",
          text: "Add information about your project. You can include success metrics, timelines, and the latest updates. This is linked to a subpage, which you can fill out with even more details about the project.",
        },
        {
          title: "Sectoral Plan 1",
          text: "Add information about your project. You can include success metrics, timelines, and the latest updates. This is linked to a subpage, which you can fill out with even more details about the project.",
        },
        {
          title: "Sectoral Plan 2",
          text: "Add information about your project. You can include success metrics, timelines, and the latest updates. This is linked to a subpage, which you can fill out with even more details about the project.",
        },
        {
          title: "Provincial Statistical Development Program",
          text: "Add information about your project. You can include success metrics, timelines, and the latest updates. This is linked to a subpage, which you can fill out with even more details about the project.",
        },
        {
          title: "Provincial Profile",
          text: "Add information about your project. You can include success metrics, timelines, and the latest updates. This is linked to a subpage, which you can fill out with even more details about the project.",
        },
      ].map((item, idx) => (
        <section key={idx} className="w-full bg-gray-100 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
            {/* IMAGE + DOWNLOAD CARD */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={heroImage}
                alt={item.title}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
              />
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <a
                  //   href={plansPDF}
                  href="/pdf/pdfpfp24.pdf" //
                  download
                  className="mt-auto inline-flex items-center justify-center w-full sm:w-auto bg-sky-700 hover:bg-sky-800 text-white font-medium py-3 px-6 rounded-xl transition"
                >
                  Download Document
                </a>
              </div>
            </motion.div>

            {/* INFORMATION CARD */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col self-start"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          </div>
          <hr className="border-t-4 border-orange-700 mt-8 w-3/4 mx-auto" />
        </section>
      ))}

      <Footer />
    </div>
  );
}
