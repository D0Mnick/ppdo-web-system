import React from "react";
import heroImage from "../images/ppdoCover.png";
import apply from "../images/application.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Megaphone,
  CalendarDays,
  Newspaper,
  Image,
  FileText,
} from "lucide-react";
import Footer from "../layout/Footer";

function NewsEvents() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay (optional para mas kita ang text) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Text */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 text-center">
          <h1
            className="
                text-white font-bold
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
                drop-shadow-lg
              "
          >
            News & Events
          </h1>
        </div>
      </section>
      {/* Content below hero */}
      <section className="w-full bg-sky-700 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* SECTION TITLE */}
          {/* <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-12"
          >
            News & Updates
          </motion.h2> */}

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CARD 1 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <Megaphone className="mx-auto text-sky-700 mb-4" size={40} />
              <h3 className="font-bold text-lg mb-2">
                Announcements & Advisories
              </h3>
              <p className="text-gray-600 text-sm">
                Official announcements, notices, and public advisories.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <CalendarDays className="mx-auto text-sky-700 mb-4" size={40} />
              <h3 className="font-bold text-lg mb-2">Activities & Calendar</h3>
              <p className="text-gray-600 text-sm">
                Upcoming programs, events, and planning activities.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <Newspaper className="mx-auto text-sky-700 mb-4" size={40} />
              <h3 className="font-bold text-lg mb-2">Press Releases</h3>
              <p className="text-gray-600 text-sm">
                Official statements and media releases from PPDO.
              </p>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <Image className="mx-auto text-sky-700 mb-4" size={40} />
              <h3 className="font-bold text-lg mb-2">Photo & Video Gallery</h3>
              <p className="text-gray-600 text-sm">
                Visual documentation of plans, events, and activities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Annual investment plan
      
             */}
      <section className="w-full bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* CARD 1 — IMAGE + DOWNLOAD */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: -100 }} // start from left
            animate={{ opacity: 1, x: 0 }} // move to center
            whileHover={{ scale: 1.05 }} // zoom on hover
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={apply}
              alt="Plans Document"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <a
                href="https://gsas.uplb.edu.ph/auth/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="
      mt-auto
      inline-flex items-center justify-center gap-2
      bg-sky-700 hover:bg-sky-800
      text-white font-semibold
      py-3 px-5
      rounded-xl
      shadow-md hover:shadow-lg
      transition-all duration-300
    "
              >
                <FileText size={18} />
                Apply Now
              </a>
            </div>
          </motion.div>

          {/* CARD 2 — MORE INFORMATION */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">
              Now accepting applicants from Northern Samar!
            </h3>

            {/* SHORT PREVIEW */}
            <p className="text-gray-600 leading-relaxed mb-2">
              Add information about your project. You can include success
              metrics, timelines, and the latest updates.
            </p>

            {/* COLLAPSIBLE CONTENT */}
            <AnimatePresence>
              {open && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-gray-600 leading-relaxed overflow-hidden"
                >
                  In collaboration with the Provincial Government of Northern
                  Samar and the University of Eastern Philippines, the
                  University of the Philippines Los Baños (UPLB), through its
                  Professional Schools of Agriculture and the Environment
                  (PSAE), is now accepting applications for the Diploma in
                  Environmental Planning (DEnP) and Master of Arts in
                  Environmental Planning (MAEnP) for AY First Semester
                  2026-2027. Advance your career in environmental planning and
                  contribute to sustainable development efforts. These graduate
                  programs equip students with the necessary skills in
                  environmental planning, policy development, and land and water
                  resource management, preparing them to be leaders in creating
                  resilient and thriving communities. Application Requirements:
                  • One (1) Photocopy of Transcript of Records • One (1)
                  Photocopy of Diploma • Two (2) Accomplished Recommendation
                  Forms from Immediate Supervisor and/or Former Professor • One
                  (1) 2x2 Scanned ID Photo • Proof of Payment (Php 500.00) Thru
                  Landbank Link.BizPortal (see #1.e at the PSAE Instruction)
                  Deadline: March 20, 2026 Apply online at
                  https://gsas.uplb.edu.ph/auth/signup using a Gmail account.
                  You can check the detailed instructions at
                  https://bit.ly/PSAEInstruction or scan the QR Code provided.
                  For inquiries, contact: Ms. Joanna Marie P. Marquez 0997 144
                  3856 marquezjoanna23@gmail.com Take advantage of this
                  opportunity to advance your expertise as an environmental
                  planner and contribute to the sustained progress of Northern
                  Samar. Apply now and join a new generation of planners
                  creating meaningful change and shaping a more sustainable
                  future for the province.
                </motion.p>
              )}
            </AnimatePresence>

            {/* TOGGLE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="mt-4 text-sky-700 font-medium hover:underline"
            >
              {open ? "Show less ▲" : "Read more ▼"}
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NewsEvents;
