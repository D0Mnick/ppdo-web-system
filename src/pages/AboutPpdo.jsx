import React from "react";
import heroImage from "../images/PPDOiMAGES.jpg";
import team from "../images/team.webp";
import {
  FileText,
  Target,
  LayoutDashboard,
  UserCheck,
  Phone,
} from "lucide-react";

const orgSections = [
  {
    title: "Mandate & Functions",
    icon: FileText,
    description: "The legal basis, roles, and responsibilities of the office.",
  },
  {
    title: "Vision, Mission & Core Values",
    icon: Target,
    description: "Our guiding principles and long-term goals.",
  },
  {
    title: "Organizational Structure",
    icon: LayoutDashboard,
    description: "Hierarchy and reporting lines within the office.",
  },
  {
    title: "Key Personnel",
    icon: UserCheck,
    description: "Profiles of the heads and staff of the organization.",
  },
  {
    title: "Contact Information",
    icon: Phone,
    description: "Official contact details for communication and inquiries.",
  },
];

const employees = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    title: "Web Developer",
    email: "juan@example.com",
    image: team,
  },
  {
    id: 2,
    name: "Maria Santos",
    title: "UI/UX Designer",
    email: "maria@example.com",
    image: team,
  },
  {
    id: 2,
    name: "Maria Santos",
    title: "UI/UX Designer",
    email: "maria@example.com",
    image: team,
  },

  {
    id: 2,
    name: "Maria Santos",
    title: "UI/UX Designer",
    email: "maria@example.com",
    image: team,
  },

  {
    id: 2,
    name: "Maria Santos",
    title: "UI/UX Designer",
    email: "maria@example.com",
    image: team,
  },
  {
    id: 2,
    name: "Maria Santos",
    title: "UI/UX Designer",
    email: "maria@example.com",
    image: team,
  },
  {
    id: 2,
    name: "Maria Santos",
    title: "UI/UX Designer",
    email: "maria@example.com",
    image: team,
  },
  {
    id: 2,
    name: "Maria Santos",
    title: "UI/UX Designer",
    email: "maria@example.com",
    image: team,
  },
  {
    id: 2,
    name: "Maria Santos",
    title: "UI/UX Designer",
    email: "maria@example.com",
    image: team,
  },
  {
    id: 2,
    name: "Maria Santos",
    title: "UI/UX Designer",
    email: "maria@example.com",
    image: team,
  },
  {
    id: 2,
    name: "Maria Santos",
    title: "UI/UX Designer",
    email: "maria@example.com",
    image: team,
  },
  {
    id: 2,
    name: "Maria Santos",
    title: "UI/UX Designer",
    email: "maria@example.com",
    image: team,
  },
  // more employees...
];
import { motion } from "framer-motion";
import Footer from "../layout/Footer";
function AboutPpdo() {
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
            About Northern Samar PPDO
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
            Overview of the PPDO’s mandate, functions, and organizational
            structure.
          </motion.h1>
        </div>
      </section>

      {/* cards */}
      <div className="bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Documents & Resources
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {orgSections.map((doc, index) => (
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

      {/* Teams */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Meet the Team</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {employees.map((emp) => (
            <div
              key={emp.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={emp.image}
                alt={emp.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="font-semibold text-lg">{emp.name}</h2>
                <p className="text-gray-500">{emp.title}</p>
                <p className="text-blue-600 truncate">{emp.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPpdo;
