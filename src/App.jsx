import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sidebar from "./layout/Sidebar";
import PlansDev from "./pages/PlansDev";
import NewsEvents from "./pages/NewsEvents";
import Maps from "./pages/Maps";
import DataStatics from "./pages/DataStatics";
import ProgramsProjects from "./pages/ProgramsProjects";
import DevelopmentClusters from "./pages/DevelopmentClusters";
import TheProvicialDevelopmentCouncil from "./pages/TheProvicialDevelopmentCouncil";
import LocalSpecialBodies from "./pages/LocalSpecialBodies";
import PartnersStakeHolders from "./pages/PartnersStakeHolders";
import { Download } from "lucide-react";
import AboutPpdo from "./pages/AboutPpdo";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Plans-Development-Framework" element={<PlansDev />} />
            <Route path="/News-Events" element={<NewsEvents />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/Data-Statistics" element={<DataStatics />} />
            <Route path="/Programs-Projects" element={<ProgramsProjects />} />
            <Route
              path="/Development-Clusters"
              element={<DevelopmentClusters />}
            />
            <Route
              path="/The-Provincial-Development-Council"
              element={<TheProvicialDevelopmentCouncil />}
            />

            <Route
              path="/Local-Special-Bodies-Secretariat-Services"
              element={<LocalSpecialBodies />}
            />

            <Route
              path="/Partners-Stakeholders"
              element={<PartnersStakeHolders />}
            />

            <Route path="/Downloads" element={<Download />} />

            <Route path="/About-PPDO" element={<AboutPpdo />} />

            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
