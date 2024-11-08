import React, { useEffect, useState } from "react";
import { Calendar } from "../ui/calendar";
import CardCar from "./cardCar";
import Location from "./location";
import { getTransportsList } from "@/utils/api/transports";
import { setAxiosConfig } from "@/utils/axiosWithConfig";

export default function LeftSidebar({ eta1, className }) {
  const [transports, setTransports] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setAxiosConfig("https://grandprize-admin.my.id");
      const resultTransports = await getTransportsList();
      setTransports(resultTransports.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={className}>
      <div className="flex justify-center items-center my-4">
        <Calendar />
      </div>
      <p>Rute Transportasi Penjemputan</p>

      <div>
        {transports.map((transport) => (
          <div key={transport.id}>
            <Location
              className=" bg-[#FF6B18] px-5 py-4 rounded-xl my-3 text-white"
              time={`${transport.waktu_penjemputan.slice(0, 5)} WIB`}
              angkatans={`Angkatan ${transport.author.angkatan}`}
              location={transport.lokasi}
              transports={transport.kendaraan}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
