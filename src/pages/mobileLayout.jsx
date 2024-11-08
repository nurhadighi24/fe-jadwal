import React, { useState } from "react";
import LeftSidebar from "@/components/leftSidebar/leftSidebar";
import MainSidebar from "@/components/mainSidebar/mainSidebar";
import { FaBars } from "react-icons/fa"; // Importing the hamburger icon

export default function MobileLayout() {
  const [selectedMenu, setSelectedMenu] = useState("Transportasi"); // Default view
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu toggle

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Header with Hamburger Menu (Only on small screens) */}
      <div className="flex items-center justify-between p-4 border-b md:hidden">
        <FaBars size={24} className="cursor-pointer" onClick={toggleMenu} />
        <h1 className="text-lg font-bold">PKUMI</h1>
      </div>

      {/* Sidebar Menu (Visible on medium screens or larger) */}
      <div
        className={`md:flex flex-col md:w-1/5 ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
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

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        {selectedMenu === "Transportasi" ? (
          <LeftSidebar className="px-3 py-2" />
        ) : (
          <MainSidebar className="px-3 py-2" />
        )}
      </div>
    </div>
  );
}
