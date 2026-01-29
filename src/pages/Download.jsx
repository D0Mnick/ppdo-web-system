import React from "react";
import heroImage from "../images/ProvincialDevelpmentCouncil.png";
import {
  Layout,
  BarChart2,
  MapPin,
  FileText,
  ClipboardList,
  File,
  BookOpen,
} from "lucide-react";
const documents = [
  {
    title: "Plans & Frameworks",
    icon: Layout,
    description: "Provincial development plans and strategic frameworks.",
  },
  {
    title: "Statistics & Data",
    icon: BarChart2,
    description: "Key datasets, statistics, and monitoring reports.",
  },
  {
    title: "Maps",
    icon: MapPin,
    description: "Geospatial maps and thematic visualizations.",
  },
  {
    title: "Programs & Projects",
    icon: FileText,
    description: "Details of ongoing and completed programs and projects.",
  },
  {
    title: "Council & Committee Outputs",
    icon: ClipboardList,
    description:
      "Minutes, resolutions, and outputs from councils and committees.",
  },
  {
    title: "Forms & Templates",
    icon: File,
    description: "Standardized forms, templates, and administrative documents.",
  },
  {
    title: "Reports & Publications",
    icon: BookOpen,
    description: "Annual reports, publications, and reference materials.",
  },
];

import { motion } from "framer-motion";
import Footer from "../layout/Footer";
function Downloads() {
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
            Downloads
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
            Central repository of official plans, data, maps, reports, and
            forms.
          </motion.h1>
        </div>
      </section>

      {/* cards */}
      <div className="bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Documents & Resources
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm
                       hover:shadow-lg hover:border-blue-500 transition cursor-pointer"
            >
              <doc.icon className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-800 mb-1">{doc.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {doc.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Downloads;
