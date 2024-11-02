import React from "react";
import CardMateri from "./cardMateri";
import CardClasses from "./cardClasses";

export default function MainSidebar({ classNameNav, realTime }) {
  return (
    <div className="border-2 w-4/5">
      <div className="flex justify-between px-3 py-3 ">
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
      <div className="grid grid-cols-5 gap-2">
        <div>
          <p className="text-center">Senin</p>
          <CardClasses
            timeFrom="08.00"
            timeUntil="09.00"
            materis="s2 PKU SM1 A"
            pengajars="Dosen ..."
            ruangans="Ruang A"
          />
        </div>
        <div>
          <p className="text-center">Selasa</p>
          <CardClasses
            timeFrom="08.00"
            timeUntil="09.00"
            materis="s2 PKU SM1 A"
            pengajars="Dosen ..."
            ruangans="Ruang A"
          />
        </div>
        <div>
          <p className="text-center">Rabu</p>
          <CardClasses
            timeFrom="08.00"
            timeUntil="09.00"
            materis="s2 PKU SM1 A"
            pengajars="Dosen ..."
            ruangans="Ruang A"
          />
        </div>
        <div>
          <p className="text-center">Kamis</p>
          <CardClasses
            timeFrom="08.00"
            timeUntil="09.00"
            materis="s2 PKU SM1 A"
            pengajars="Dosen ..."
            ruangans="Ruang A"
          />
        </div>
        <div>
          <p className="text-center">Jumat</p>
          <CardClasses
            timeFrom="08.00"
            timeUntil="09.00"
            materis="s2 PKU SM1 A"
            pengajars="Dosen ..."
            ruangans="Ruang A"
          />
        </div>
      </div>
    </div>
  );
}
