import React from "react";
import heroImage from "../images/LocalSpecialBodies.png";
import { ShieldCheck, Ban, AlertTriangle, Grid } from "lucide-react";

import { motion } from "framer-motion";
const councils = [
  {
    title: "Provincial Peace and Order Council (PPOC)",
    icon: ShieldCheck,
    description: "Maintains peace, security, and public order in the province.",
  },
  {
    title: "Provincial Anti-Drug Abuse Council (PADAC)",
    icon: Ban,
    description: "Leads anti-drug programs, prevention, and rehabilitation.",
  },
  {
    title: "Provincial Disaster Risk Reduction and Management Council (PDRRMC)",
    icon: AlertTriangle,
    description: "Plans and coordinates disaster preparedness and response.",
  },
  {
    title: "Other Provincial Boards & Committees",
    icon: Grid,
    description: "Other mandated boards supporting provincial governance.",
  },
];
function LocalSpecialBodies() {
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
            Local Special Bodies & Secretariat Services
          </h1>
        </div>
      </section>
      {/* Content below hero */}

      {/* 
      cards */}
      <div className="bg-gray-50 p-8 rounded-xl space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Overview of Local Special Bodies
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
            Local Special Bodies function as coordinating and policy-making
            mechanisms that support governance, development planning, public
            safety, and effective service delivery at the provincial level.
          </p>
        </section>

        {/* PPDO as Secretariat */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            PPDO as Secretariat (Roles & Functions)
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
            The Provincial Planning and Development Office (PPDO) serves as the
            Secretariat to various councils and committees by providing
            technical, administrative, and coordination support, including
            documentation, meeting facilitation, and monitoring of approved
            resolutions.
          </p>
        </section>

        {/* Supported Councils */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Supported Councils & Committees
          </h2>
          <p className="text-sm text-gray-600 mb-6 max-w-3xl leading-relaxed">
            The following councils and committees are supported by the PPDO
            through secretariat services to ensure effective coordination and
            implementation of provincial programs.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {councils.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm
                     hover:shadow-md hover:border-blue-500 transition"
              >
                <item.icon className="text-blue-600 mb-4" size={32} />
                <h3 className="font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default LocalSpecialBodies;
