import React from "react";
import heroImage from "../images/ppdoCover.png";
import logo from "../images/vission.jpg"; // adjust path if needed
import logo1 from "../images/mission.jpg";
import logo2 from "../images/quality.jpg";
import logo3 from "../images/cdra.jpg";
import logo4 from "../images/application.jpg";
import logo5 from "../images/phb.jpg";
import logo6 from "../images/lgu.jpg";
import logo7 from "../images/pdf.png";
import logo8 from "../images/basicFacts.png";
import logo9 from "../images/hco.jpg";
import logo10 from "../images/serbisyo.jpg";

import { FaArrowDown, FaArrowRight } from "react-icons/fa"; // npm install react-icons
import Footer from "../layout/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay bawat card
      },
    },
  };

  const cardVariantss = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const qualityPolicies = [
    {
      id: 1,
      title: "CDRA Training",
      image: logo3,
      description: "january 13, 2026",
    },
    {
      id: 2,
      title: "NOW ACCEPTING APPLICATION FROM NORTHERN SAMAR",
      image: logo4,
      description: "january 14, 2026",
    },
    {
      id: 3,
      title: "PROVINCIAL HEALTH BOARD",
      image: logo5,
      description: "january 14, 2026.",
    },
    {
      id: 4,
      title: "LGU las Navas CLUP-ZO 2023-2032 undergoes PLUC review",
      image: logo6,
      description: "january 16, 2026.",
    },
  ];

  // Variants per card
  const cardVariants = {
    left: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    bottom: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
  };

  const transition = {
    type: "spring", // spring for smooth natural movement
    stiffness: 80, // controls speed
    damping: 20, // smoothness, higher = slower
    mass: 0.5, // lighter = faster, heavier = slower
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <img
          src={heroImage}
          alt="Hero Background"
          className="
      absolute inset-0
      w-full h-full
      object-cover object-center
    "
        />
      </section>

      {/* Content below hero */}
      <section className="w-full bg-sky-700 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }} // start invisible at nasa baba
            animate={{ opacity: 1, y: 0 }} // slide up at fade in
            transition={{ duration: 1, ease: "easeOut" }}
            className="
            font-bold text-white
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
          >
            Welcome
          </motion.h1>
        </div>
      </section>

      <section className="w-full flex justify-center bg-gray-100 px-4 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // start invisible at nasa baba
          animate={{ opacity: 1, y: 0 }} // slide up at fade in
          transition={{ duration: 1, ease: "easeOut" }}
          className="
          bg-white shadow-lg rounded-xl
          w-full max-w-5xl
          p-6 sm:p-8 lg:p-10
          text-center
        "
        >
          <p
            className="
            text-gray-800
            text-base sm:text-lg lg:text-xl
            leading-relaxed
          "
          >
            The Provincial Planning and Development Office (PPDO) of the
            Provincial Government of Northern Samar (PGNS) serves as the
            province’s central planning, research, and policy support arm. It
            leads the formulation, coordination, monitoring, and evaluation of
            provincial development plans, programs, and projects, ensuring they
            are data-driven, inclusive, and aligned with national and regional
            development frameworks. The PPDO also strengthens inter-agency
            coordination, promotes evidence-based decision-making, and supports
            local government units in advancing sustainable and resilient
            development across Northern Samar.
          </p>
        </motion.div>
      </section>
      <section className="py-10 bg-gray-100">
        {/* Button Wrapper */}
        <div className="flex justify-center">
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Card Section */}
      <section className="w-full bg-gray-100 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Card 1 - Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants.left}
            transition={transition}
            className="bg-white shadow-lg rounded-xl w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={logo}
              alt="Vision"
              className="w-full h-48 sm:h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-sky-700">
                VISION
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                By the year 2028, the Provincial Planning and Development Office
                shall be a results-driven organization, a repository of
                evidence-based planning information and a catalyst of
                sustainable and inclusive development in Northern Samar led by a
                proactive and people-oriented workforce.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants.right}
            transition={transition}
            className="bg-white shadow-lg rounded-xl w-full max-w-sm overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={logo1}
              alt="Mission"
              className="w-full h-48 sm:h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-sky-700">
                MISSION
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                The Provincial Planning and Development Office is committed to
                steering the Province of Northern Samar towards sustainable and
                inclusive development by ensuring that the programs and plans
                are timely implemented, monitored, and evaluated through
                heightened participation among stakeholders.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Bottom */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants.bottom}
            transition={transition}
            className="bg-white shadow-lg rounded-xl w-full max-w-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={logo2}
              alt="Quality Policy"
              className="w-full h-48 sm:h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-sky-700">
                QUALITY POLICY
              </h2>
              <p className="text-base sm:text-lg text-gray-800 font-semibold mb-4">
                We plan, We deliver.
              </p>
              <p className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-gray-500">
                <span>#WePlanWeDeliver</span>
                <span>#CatalystofDevelopment</span>
                <span>#PadayonNgaKauswagan</span>
                <span>#PPDONorthernSamar</span>
                <span>#NortehanonMarigonMainuswagonMalipayon</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-sky-700 px-4 py-12 sm:py-16 lg:py-20">
        {/* SECTION HEADER */}
        <div className="max-w-[1400px] mx-auto mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            News and Updates
          </h1>
          <p className="text-sky-100 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Stay informed with the latest announcements, policies, and updates
            from the Provincial Planning and Development Office.
          </p>
        </div>

        {/* CARDS */}
        <motion.div
          className="max-w-[1400px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {qualityPolicies.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariantss}
              className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 sm:h-48 lg:h-56 object-cover"
              />

              <div className="p-5 sm:p-6 text-center">
                <h2 className="font-bold text-sky-700 mb-3 text-lg sm:text-xl lg:text-2xl">
                  {item.title}
                </h2>

                <p className="text-gray-800 font-semibold text-sm sm:text-base lg:text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative w-full bg-sky-700 flex items-center justify-center py-20">
        <div className="w-full max-w-full px-4">
          <img
            src={logo7}
            alt="Hero Background"
            className="w-full max-h-[500px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-[800px] object-contain mx-auto"
          />
        </div>
      </section>

      {/* Card Section */}
      <section className="w-full bg-gray-100 px-4 py-12 sm:py-16 lg:py-20">
        <div
          className="
      max-w-[1200px] mx-auto
      grid grid-cols-1
      sm:grid-cols-2
      gap-8
      justify-items-center
    "
        >
          {/* Card 1 */}
          <div
            className="
        bg-white shadow-lg rounded-xl
        w-full max-w-xl
        overflow-hidden
        transition-transform duration-300
        hover:scale-105 hover:shadow-2xl
      "
          >
            <img
              src={logo8}
              alt="Vision"
              className="w-full h-60 sm:h-72 md:h-80 object-cover"
            />
            <div className="p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-sky-700">
                Basic Facts
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Northern Samar is a province in the Philippines' Eastern Visayas
                region, known for its rugged terrain, rich natural resources,
                and predominantly agricultural/fishing economy, with its capital
                at Catarman, featuring a mix of mountains, valleys, and
                coastlines, and experiencing increasing economic development
                despite its remote, undiscovered charm.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="
        bg-white shadow-lg rounded-xl
        w-full max-w-xl
        overflow-hidden
        transition-transform duration-300
        hover:scale-105 hover:shadow-2xl
      "
          >
            <img
              src={logo9}
              alt="Mission"
              className="w-full h-60 sm:h-72 md:h-80 object-cover"
            />
            <div className="p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-sky-700">
                From Sustained Progress To Serbisyong HCO
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Former Governor and now Congressman Edwin Ongchuan (right) with
                incumbent Governor Harris Christopher Ongchuan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full flex items-center justify-center py-20 bg-gray-100">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          <img
            src={logo10}
            alt="Hero Background"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
