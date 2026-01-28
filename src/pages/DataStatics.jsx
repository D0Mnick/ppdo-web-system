import React from "react";
import heroImage from "../images/dataStatics.png";

import { BarChart3, FileText, Database, PieChart, Table } from "lucide-react";

import { motion } from "framer-motion";

function DataStatics() {
  const sections = [
    {
      title: "CBMS 2022 / 2023 & 2024",
      desc: "Community-Based Monitoring System datasets and summaries.",
      icon: <Database size={36} />,
      gradient: "from-blue-600 to-blue-800",
    },
    {
      title: "Provincial Indicators & Scorecards",
      desc: "Key performance indicators and development scorecards.",
      icon: <PieChart size={36} />,
      gradient: "from-emerald-600 to-emerald-800",
    },
    {
      title: "Statistical Reports & Tables",
      desc: "Official statistical publications and tabular reports.",
      icon: <Table size={36} />,
      gradient: "from-indigo-600 to-indigo-800",
    },
    {
      title: "Dashboards & Visualizations",
      desc: "Interactive dashboards for data-driven insights.",
      icon: <BarChart3 size={36} />,
      gradient: "from-purple-600 to-purple-800",
    },
    {
      title: "Open Datasets",
      desc: "Downloadable datasets for public use and research.",
      icon: <FileText size={36} />,
      gradient: "from-orange-600 to-orange-800",
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
            Data & Statistics
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
            Official CBMS results, indicators, datasets, and analytical tools
            for evidence-based decision-making.
          </motion.h1>
        </div>
      </section>

      {/* Card */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            Provincial Data & Statistics
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10 p-8">
                  <div className="mb-5 text-slate-700 group-hover:text-white transition">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-slate-800 group-hover:text-white mb-3 transition">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 group-hover:text-slate-100 text-sm leading-relaxed transition">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataStatics;
