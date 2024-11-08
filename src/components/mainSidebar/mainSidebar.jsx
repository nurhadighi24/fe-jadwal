import React, { useEffect, useState } from "react";
import CardMateri from "./cardMateri";
import CardClasses from "./cardClasses";
import { getDayList } from "@/utils/api/day";
import { setAxiosConfig } from "@/utils/axiosWithConfig";
import { getJadwalList } from "@/utils/api/jadwals";
import { getMataKulsList } from "@/utils/api/mataKuliahs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function MainSidebar({ classNameNav }) {
  const [jadwals, setJadwals] = useState([]);
  const [matkuls, setMatkuls] = useState([]);
  const [realTime, setRealTime] = useState("");
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

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

  // Get unique days from jadwals for navigation
  const days = Array.from(new Set(jadwals.map((jadwal) => jadwal.day.name)));

  // Filter jadwals to show only the selected day
  const filteredJadwals = jadwals.filter(
    (jadwal) => jadwal.day.name === days[currentDayIndex]
  );

  // Handle day navigation
  const handlePrevDay = () => {
    setCurrentDayIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : days.length - 1
    );
  };

  const handleNextDay = () => {
    setCurrentDayIndex((prevIndex) =>
      prevIndex < days.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="border-2 px-3 py-2">
      <div className="grid md:grid-cols-3 px-3 py-3 ">
        <div className="order-2 md:order-1">
          <p className="hidden md:block">Jadwal Mata Kuliah</p>
          <p className="hidden md:block">Hari ini</p>
          <div className="grid grid-cols-3 gap-3">
            {matkuls.map((matkul) => (
              <div key={matkul.id} className="">
                <CardMateri matkuls={matkul.name} color={matkul.color} />
              </div>
            ))}
          </div>
        </div>
        <div className="py-10 order-1 md:order-2">
          <h1 className="text-5xl font-bold text-center">{realTime}</h1>
        </div>
        <div className="order-3 md:order-3">
          <img
            src="/logo-pkumi.png"
            alt="logo"
            className="w-64 m-auto hidden md:block"
          />
        </div>
      </div>

      {/* Mobile View Day Navigation */}
      <div className="flex items-center justify-center  my-4">
        <button
          onClick={handlePrevDay}
          aria-label="Previous Day"
          className="p-2"
        >
          <FaArrowLeft />
        </button>
        <p className="mx-4 font-bold">{days[currentDayIndex]}</p>
        <button onClick={handleNextDay} aria-label="Next Day" className="p-2">
          <FaArrowRight />
        </button>
      </div>

      {/* Display filtered jadwals */}
      <div className="grid md:grid-cols-5 gap-3">
        {filteredJadwals.map((jadwal) => (
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
