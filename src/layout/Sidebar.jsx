import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiHome,
  HiDocumentText,
  HiNewspaper,
  HiMap,
  HiChartBar,
  HiBriefcase,
  HiCollection,
  HiUsers,
  HiOfficeBuilding,
  HiDownload,
  HiInformationCircle,
} from "react-icons/hi";
import { Menu, X } from "lucide-react";
import logo from "../images/ppdo LOGO.png"; // adjust path kung iba
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/", icon: HiHome },
    {
      name: "Plans & Development Framework",
      href: "/Plans-Development-Framework",
      icon: HiDocumentText,
    },
    { name: "News & Events", href: "/News-Events", icon: HiNewspaper },
    { name: "Maps", href: "/maps", icon: HiMap },
    { name: "Data & Statistics", href: "/Data-Statistics", icon: HiChartBar },
    {
      name: "Programs & Projects",
      href: "/Programs-Projects",
      icon: HiBriefcase,
    },
    {
      name: "Development Clusters",
      href: "/Development-Clusters",
      icon: HiCollection,
    },
    {
      name: "The Provincial Development Council",
      href: "/The-Provincial-Development-Council",
      icon: HiUsers,
    },
    {
      name: "Local Special Bodies & Secretariat Services",
      href: "/Local-Special-Bodies-Secretariat-Services",
      icon: HiOfficeBuilding,
    },
    {
      name: "Partners & Stakeholders",
      href: "/Partners-Stakeholders",
      icon: HiUsers,
    },
    { name: "Downloads", href: "/downloads", icon: HiDownload },
    { name: "About PPDO", href: "/About-PPDO", icon: HiInformationCircle },
  ];

  // Sidebar animation
  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
  };

  // Menu item animation
  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.25 } },
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-gray-900 text-white flex items-center px-4 z-50">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="mr-4"
          aria-label="Toggle sidebar"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/">
          <div className="flex items-center ml-3 gap-2 cursor-pointer hover:opacity-80 transition">
            <img
              src={logo}
              alt="Northern Samar PPDO Logo"
              className="h-8 w-8 object-contain"
            />
            <h1 className="font-semibold whitespace-nowrap">
              Northern Samar PPDO
            </h1>
          </div>
        </Link>
      </div>

      {/* SIDEBAR */}
      <motion.aside
        variants={sidebarVariants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        className="fixed top-14 left-0 h-[calc(100vh-3.5rem)] w-64 bg-gray-800 text-white z-40"
      >
        <nav className="p-4 space-y-1 h-full overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div key={item.name} variants={menuItemVariants}>
                <NavLink
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-4 py-2 rounded-lg transition
                    ${
                      isActive
                        ? "bg-gray-700 border-l-4 border-blue-500 pl-3"
                        : "hover:bg-gray-700"
                    }
                  `}
                >
                  <Icon className="text-lg shrink-0" />
                  <span className="text-sm">{item.name}</span>
                </NavLink>
              </motion.div>
            );
          })}
        </nav>
      </motion.aside>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
}
