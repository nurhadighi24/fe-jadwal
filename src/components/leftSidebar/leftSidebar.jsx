import React from "react";
import { Calendar } from "../ui/calendar";
import CardCar from "./cardCar";
import Location from "./location";

export default function LeftSidebar({ eta1, className }) {
  return (
    <div className={className}>
      <Calendar />
      <p>Rute Transportasi Penjemputan</p>
      <CardCar />
      <div>
        <p>{eta1}</p>
        <Location
          className="flex items-center justify-between bg-[#BCA3F2] px-2 py-1 rounded-lg my-2"
          time="07.00"
          location="Asrama 1 - Masjid Istiqlal"
        />
        <Location
          className="flex items-center justify-between bg-[#EF9A9A] px-2 py-1 rounded-lg my-2"
          time="08.00"
          location="Asrama 2 - Masjid Istiqlal"
        />
        <Location
          className="flex items-center justify-between bg-[#DCFDFF] px-2 py-1 rounded-lg my-2"
          time="09.00"
          location="Asrama 3 - Masjid Istiqlal"
        />
        <Location
          className="flex items-center justify-between bg-[#E7D4E4] px-2 py-1 rounded-lg my-2"
          time="10.00"
          location="Asrama 1 - Masjid Istiqlal"
        />
        <Location
          className="flex items-center justify-between bg-[#DCFDFF] px-2 py-1 rounded-lg my-2"
          time="11.00"
          location="Asrama 2 - Masjid Istiqlal"
        />
        <Location
          className="flex items-center justify-between bg-[#BCA3F2] px-2 py-1 rounded-lg my-2"
          time="12.00"
          location="Asrama 3 - Masjid Istiqlal"
        />
      </div>
      <div>
        <p>{eta1}</p>
        <Location
          className="flex items-center justify-between bg-[#BCA3F2] px-2 py-1 rounded-lg my-2"
          time="07.00"
          location="Asrama 1 - Masjid Istiqlal"
        />
        <Location
          className="flex items-center justify-between bg-[#EF9A9A] px-2 py-1 rounded-lg my-2"
          time="08.00"
          location="Asrama 2 - Masjid Istiqlal"
        />
        <Location
          className="flex items-center justify-between bg-[#DCFDFF] px-2 py-1 rounded-lg my-2"
          time="09.00"
          location="Asrama 3 - Masjid Istiqlal"
        />
        <Location
          className="flex items-center justify-between bg-[#E7D4E4] px-2 py-1 rounded-lg my-2"
          time="10.00"
          location="Asrama 1 - Masjid Istiqlal"
        />
        <Location
          className="flex items-center justify-between bg-[#DCFDFF] px-2 py-1 rounded-lg my-2"
          time="11.00"
          location="Asrama 2 - Masjid Istiqlal"
        />
        <Location
          className="flex items-center justify-between bg-[#BCA3F2] px-2 py-1 rounded-lg my-2"
          time="12.00"
          location="Asrama 3 - Masjid Istiqlal"
        />
      </div>
    </div>
  );
}
