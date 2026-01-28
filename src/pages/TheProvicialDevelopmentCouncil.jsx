import React from "react";
import heroImage from "../images/ProvincialDevelpmentCouncil.png";
import {
  BookOpen,
  Users,
  FileText,
  Layers,
  CalendarCheck,
  CheckSquare,
} from "lucide-react";

import { motion } from "framer-motion";
import Footer from "../layout/Footer";
function TheProvincialDevelopmentCouncil() {
  // cards

  const sections = [
    {
      title: "Legal Basis & Mandate",
      icon: BookOpen,
      color: "text-blue-500",
      description:
        "Details the legal foundation, mandates, and authority governing the organization.",
    },
    {
      title: "Composition & Membership",
      icon: Users,
      color: "text-green-500",
      description:
        "Information about the members, roles, and organizational structure.",
    },
    {
      title: "Functions & Powers",
      icon: FileText,
      color: "text-purple-500",
      description:
        "The duties, responsibilities, and powers vested in the organization.",
    },
    {
      title: "Committees & Clusters",
      icon: Layers,
      color: "text-yellow-500",
      description:
        "Breakdown of internal committees, subgroups, and their focus areas.",
    },
    {
      title: "Meetings & Key Decisions",
      icon: CalendarCheck,
      color: "text-red-500",
      description: "Records of meetings, minutes, and critical decisions made.",
    },
    {
      title: "Approved Plans & Resolutions",
      icon: CheckSquare,
      color: "text-indigo-500",
      description:
        "Officially approved plans, projects, and resolutions passed by the organization.",
    },
  ];
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
            The Provincial Development Council
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
            Information on the province’s highest planning and policy-making
            body, including members and key decisions.
          </motion.h1>
        </div>
      </section>

      {/* // cards */}
      <section>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Organizational Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`${section.color}`} size={28} />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 flex-1">{section.description}</p>
                  <button className="mt-3 self-start text-blue-600 font-medium hover:underline">
                    View Details
                  </button>
                </div>
              );
            })}
          </div>
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

export default TheProvincialDevelopmentCouncil;
