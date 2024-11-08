import React, { useState } from "react";
import LeftSidebar from "@/components/leftSidebar/leftSidebar";
import MainSidebar from "@/components/mainSidebar/mainSidebar";
import { FaBars } from "react-icons/fa"; // Importing the hamburger icon
import { IoBus } from "react-icons/io5";
import { LucideCalendarDays } from "lucide-react";

export default function Index() {
  const [selectedMenu, setSelectedMenu] = useState("Transportasi"); // Default view
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu toggle

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Header with Hamburger Menu (Only on small screens) */}
      <div className="flex items-center justify-between p-4 border-b md:hidden">
        <FaBars size={24} className="cursor-pointer" onClick={toggleMenu} />
        <img src="/logo-pkumi.png" alt="" className="w-20 h-10" />
      </div>

      {/* Main Content for Desktop */}
      <div className="hidden md:block w-full">
        <h1>Jadwal Mata Kuliah</h1>
        <p>Jadwal Kelas, materi, dan pengajar</p>
        <div className="flex gap-5">
          <LeftSidebar className="px-3 py-2 border-2 rounded-lg shadow-lg w-1/5" />
          <MainSidebar className="flex-1" />
        </div>
      </div>

      {/* Sidebar Menu and Main Content Area for Mobile */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <IoBus className="text-2xl" />
            <button
              className={`p-2 w-full text-left ${
                selectedMenu === "Transportasi" ? "font-bold" : ""
              }`}
              onClick={() => {
                setSelectedMenu("Transportasi");
                setMenuOpen(false);
              }}
            >
              Transportasi
            </button>
          </div>
          <div className="flex items-center">
            <LucideCalendarDays />
            <button
              className={`p-2 w-full text-left ${
                selectedMenu === "Jadwal Kelas" ? "font-bold" : ""
              }`}
              onClick={() => {
                setSelectedMenu("Jadwal Kelas");
                setMenuOpen(false);
              }}
            >
              Jadwal Kelas
            </button>
          </div>
        </div>
      </div>

      {/* Display LeftSidebar or MainSidebar based on selectedMenu for Mobile */}
      {menuOpen || (
        <div className="md:hidden flex-1 overflow-y-auto p-4">
          {selectedMenu === "Transportasi" ? (
            <LeftSidebar className="px-3 py-2" />
          ) : (
            <MainSidebar className="px-3 py-2 w-full" />
          )}
        </div>
      )}
    </div>
  );
}
