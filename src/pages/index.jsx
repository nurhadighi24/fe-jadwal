import LeftSidebar from "@/components/leftSidebar/leftSidebar";
import MainSidebar from "@/components/mainSidebar/mainSidebar";
import React from "react";

export default function Index() {
  return (
    <>
      <h1>Jadwal Mata Kuliah</h1>
      <p>Jadwal Kelas, materi dan pengajar</p>
      <div className="flex gap-5">
        <LeftSidebar className="px-3 py-2 border-2 rounded-lg shadow-lg w-1/5" />
        <MainSidebar />
      </div>
    </>
  );
}
