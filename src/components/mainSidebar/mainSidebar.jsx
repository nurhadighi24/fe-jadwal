import React, { useEffect, useState } from "react";
import CardMateri from "./cardMateri";
import CardClasses from "./cardClasses";
import { getDayList } from "@/utils/api/day";
import { setAxiosConfig } from "@/utils/axiosWithConfig";
import { getJadwalList } from "@/utils/api/jadwals";
import { getMataKulsList } from "@/utils/api/mataKuliahs";

export default function MainSidebar({ classNameNav }) {
  const [jadwals, setJadwals] = useState([]);
  const [matkuls, setMatkuls] = useState([]);
  const [realTime, setRealTime] = useState("");

  useEffect(() => {
    fetchData();

    // Set up an interval to update the time every second
    const interval = setInterval(() => {
      const jakartaTime = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Jakarta",
      }).format(new Date());
      setRealTime(jakartaTime);
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  async function fetchData() {
    try {
      setAxiosConfig("https://grandprize-admin.my.id");
      const resultJadwals = await getJadwalList();
      const resultMatkuls = await getMataKulsList();
      setJadwals(resultJadwals.data);
      setMatkuls(resultMatkuls.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="border-2 w-4/5">
      <div className="flex justify-between px-3 py-3 ">
        <div>
          <p>Jadwal Mata Kuliah</p>
          <p>Hari ini</p>
          <div className="flex">
            {matkuls.map((matkul) => (
              <div key={matkul.id}>
                <CardMateri matkuls={matkul.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="py-10">
          <h1 className="text-5xl font-bold">{realTime}</h1>
        </div>
        <div>
          <img src="/logo-pkumi.png" alt="logo" className="w-64" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {jadwals.map((jadwal) => (
          <div key={jadwal.id}>
            <CardClasses
              day={jadwal.day.name} // Pass the day name from API here
              timeFrom={jadwal.jam_mulai.slice(0, 5)}
              timeUntil={jadwal.jam_selesai.slice(0, 5)}
              materis={jadwal.kelas.name}
              pengajars={jadwal.dosen.name}
              ruangans={jadwal.ruang}
              color={jadwal.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
