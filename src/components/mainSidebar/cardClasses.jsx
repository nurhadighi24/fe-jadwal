import React from "react";

export default function CardClasses({
  timeFrom,
  timeUntil,
  materis,
  pengajars,
  ruangans,
  day,
  color,
}) {
  return (
    <>
      <div>
        <p className="text-center">{day}</p>
        <div
          className="border-2 rounded-xl px-3 py-2"
          style={{ backgroundColor: color }}
        >
          <div className="flex">
            <p>{timeFrom}-</p>
            <p>{timeUntil}</p>
          </div>
          <p className="font-extrabold text-xl">{materis}</p>
          <p className="">{pengajars}</p>
        </div>
        <div
          className="border-2 rounded-xl px-3 py-2"
          style={{ backgroundColor: color }}
        >
          <a href="">{ruangans}</a>
        </div>
      </div>
    </>
  );
}
