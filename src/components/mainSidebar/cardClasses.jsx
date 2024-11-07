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
  // Check if ruangans contains a URL pattern
  const isLink =
    ruangans.startsWith("http://") || ruangans.startsWith("https://");

  return (
    <>
      <div>
        <p className="text-center font-extrabold text-2xl">{day}</p>
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
          {isLink ? (
            <a
              href={ruangans}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 text-blue-100"
            >
              Link Zoom
            </a>
          ) : (
            <p>{ruangans}</p>
          )}
        </div>
      </div>
    </>
  );
}
