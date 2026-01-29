import React from "react";

import heroImage from "../images/PartnersStakeholders.png";
import { Flag, Home, BookOpen, Users, Briefcase } from "lucide-react";

import { motion } from "framer-motion";
const sectors = [
  {
    title: "National Government Agencies",
    icon: Flag,
    description: "Key agencies that implement national policies and programs.",
  },
  {
    title: "Local Government Units (LGUs)",
    icon: Home,
    description:
      "Provincial, city, and municipal offices coordinating local initiatives.",
  },
  {
    title: "CSOs & Academe",
    icon: BookOpen,
    description:
      "Civil society organizations and academic institutions supporting development.",
  },
  {
    title: "Development Partners",
    icon: Users,
    description:
      "International and local partners contributing resources and technical support.",
  },
  {
    title: "Private Sector",
    icon: Briefcase,
    description:
      "Businesses and private organizations involved in public-private partnerships.",
  },
];
function PartnersStakeHolders() {
  return (
    <div>
      {" "}
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
            Partners & StakeHolders
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
            Organizations and institutions collaborating with the PPDO in
            advancing provincial development.
          </motion.h1>
        </div>
      </section>
      {/* cards section */}
      <section>
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Key Sectors
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm
                       hover:shadow-lg hover:border-blue-500 transition"
              >
                <sector.icon className="text-blue-600 mb-4" size={32} />
                <h3 className="font-semibold text-gray-800 mb-1">
                  {sector.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnersStakeHolders;
