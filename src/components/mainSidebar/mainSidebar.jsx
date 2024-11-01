import React from "react";
import CardMateri from "./cardMateri";

export default function MainSidebar({ className, realTime }) {
  return (
    <div className={className}>
      <div>
        <p>Jadwal Mata Kuliah</p>
        <p>Hari ini</p>
        <CardMateri />
      </div>
      <div className="py-10">
        <h1 className="text-5xl font-bold">{realTime}</h1>
      </div>
      <div>
        <img src="/logo-pkumi.png" alt="logo" className="w-64" />
      </div>
    </div>
  );
}
