import React from "react";
import heroImage from "../images/programsProjects.png";
import { Flag, Activity, CheckCircle2, BarChart4 } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../layout/Footer";
function ProgramsProjects() {
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

  // cards
  const items = [
    {
      title: "Flagship Programs",
      desc: "Priority provincial programs driving long-term development goals.",
      icon: <Flag size={36} />,
      color: "from-sky-600 to-sky-800",
    },
    {
      title: "Ongoing Projects",
      desc: "Currently implemented projects across sectors and municipalities.",
      icon: <Activity size={36} />,
      color: "from-amber-600 to-amber-800",
    },
    {
      title: "Completed Projects",
      desc: "Successfully completed projects with documented outcomes.",
      icon: <CheckCircle2 size={36} />,
      color: "from-emerald-600 to-emerald-800",
    },
    {
      title: "Monitoring & Evaluation Highlights",
      desc: "Key findings, performance results, and evaluation summaries.",
      icon: <BarChart4 size={36} />,
      color: "from-indigo-600 to-indigo-800",
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
            Programs & Projects
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
            Flagship, ongoing, and completed provincial programs and projects
            with key results and highlights.
          </motion.h1>
        </div>
      </section>

      {/* CArds */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            Programs, Projects & Monitoring
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10 p-7 text-center">
                  <div className="flex justify-center mb-4 text-slate-700 group-hover:text-white transition">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-white mb-2 transition">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 group-hover:text-slate-100 leading-relaxed transition">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
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

export default ProgramsProjects;
