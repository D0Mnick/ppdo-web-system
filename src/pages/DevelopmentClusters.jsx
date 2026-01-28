import React from "react";
import heroImage from "../images/DevelopmentCluster.png";
import { Flag, Activity, CheckCircle2, BarChart4 } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../layout/Footer";
function DevelopmentClusters() {
  // downloaddocuments
  const data = [
    {
      id: 1,
      title: "Provincial Development and Physical Framework Plan (PDPFP)",
      text: "Add information about your project. You can include success metrics, timelines, and the latest updates. This is linked to a subpage, which you can fill out with even more details about the project.",
      pdf: "/pdf/pdfpfp24.pdf",
      image: heroImage,
    },
    {
      id: 2,
      title: "Provincial development investment program",
      text: "Add information about your project. You can include success metrics, timelines, and the latest updates. This is linked to a subpage, which you can fill out with even more details about the project.",
      pdf: "/pdf/pdfpfp24.pdf",
      image: heroImage,
    },
    {
      id: 3,
      title: "(sectoral plan 1)",
      text: "Add information about your project. You can include success metrics, timelines, and the latest updates. This is linked to a subpage, which you can fill out with even more details about the project.",
      pdf: "/pdf/pdfpfp24.pdf",
      image: heroImage,
    },
    {
      id: 4,
      title: "(sectoral plan 2)",
      text: "Add information about your project. You can include success metrics, timelines, and the latest updates. This is linked to a subpage, which you can fill out with even more details about the project.",
      pdf: "/pdf/pdfpfp24.pdf",
      image: heroImage,
    },
    {
      id: 5,
      title: "Provincial Statistical development program",
      text: "Add information about your project. You can include success metrics, timelines, and the latest updates. This is linked to a subpage, which you can fill out with even more details about the project.",
      pdf: "/pdf/pdfpfp24.pdf",
      image: heroImage,
    },
    {
      id: 6,
      title: "Provincial profile",
      text: "Add information about your project. You can include success metrics, timelines, and the latest updates. This is linked to a subpage, which you can fill out with even more details about the project.",
      pdf: "/pdf/pdfpfp24.pdf",
      image: heroImage,
    },
  ];

  return (
    <div>
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
            Development Clusters
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
            Integrated view of provincial initiatives organized by social,
            health, infrastructure/environment, and economic clusters.
          </motion.h1>
        </div>
      </section>

      {/* download documents */}
      {data.map((item, idx) => (
        <section key={item.id} className="w-full bg-gray-100 py-12 sm:py-16">
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
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
              />

              {/* Button laging nasa ilalim */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <a
                  href={item.pdf}
                  download
                  aria-label={`Download ${item.title}`}
                  className="mt-auto inline-flex items-center justify-center w-full sm:w-auto bg-sky-700 hover:bg-sky-800 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                  Download Document
                </a>
              </div>
            </motion.div>

            {/* INFORMATION CARD */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col"
              initial={{ opacity: 0, x: idx % 2 === 0 ? 60 : -60 }}
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

              <div className="mt-4"></div>
            </motion.div>
          </div>

          <hr className="border-t-4 border-orange-700 mt-8 w-3/4 mx-auto" />
        </section>
      ))}
      <Footer />
    </div>
  );
}

export default DevelopmentClusters;
