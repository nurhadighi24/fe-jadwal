import React from "react";
import { Calendar } from "../ui/calendar";
import CardCar from "./cardCar";
import Location from "./location";

export default function LeftSidebar({ eta1, className }) {
  return (
    <div className={className}>
      <Calendar />
      <p>Rute Transportasi Penjemputan</p>
      {/* <CardCar /> */}
      <div>
        {/* <p>{eta1}</p> */}
        <Location
          className=" bg-[#FF6B18] px-5 py-4 rounded-xl my-3 text-white"
          time="07.00 WIB"
          angkatans="Angkatan 23"
          location="Asrama 1 - Masjid Istiqlal"
          transports="Mobil 1"
        />
        <Location
          className=" bg-[#FF6B18] px-5 py-3 rounded-xl my-3 text-white"
          time="07.00 WIB"
          angkatans="Angkatan 23"
          location="Asrama 1 - Masjid Istiqlal"
          transports="Mobil 1"
        />
        <Location
          className=" bg-[#FF6B18] px-5 py-3 rounded-xl my-3 text-white"
          time="07.00 WIB"
          angkatans="Angkatan 23"
          location="Asrama 1 - Masjid Istiqlal"
          transports="Mobil 1"
        />
      </div>
    </div>
  );
}
