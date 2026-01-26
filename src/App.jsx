import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sidebar from "./layout/Sidebar";
import PlansDev from "./pages/PlansDev";
import NewsEvents from "./pages/NewsEvents";
import Maps from "./pages/Maps";

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
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>404 Page Not Found</h1>} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
