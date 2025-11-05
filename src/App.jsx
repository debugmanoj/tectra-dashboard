import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Doctors = lazy(() => import("./pages/Doctors.jsx"));

import Sidebar from "./components/layout/Sidebar.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import { Toaster } from "react-hot-toast";
import Loader from "./components/common/Loader.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 bg-[#f0f2f4]">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-1">
            <div className="max-w-7xl mx-auto">
              <Suspense
                fallback={<Loader message="Loading..."/>}
              >
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/doctors" element={<Doctors />} />
                </Routes>
              </Suspense>
            </div>
          </main>
        </div>
      </div>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
