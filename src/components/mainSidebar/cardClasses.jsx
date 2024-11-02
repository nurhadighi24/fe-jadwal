import React from "react";

export default function CardClasses({
  timeFrom,
  timeUntil,
  materis,
  pengajars,
  ruangans,
}) {
  return (
    <div>
      <div className="border-2 rounded-xl bg-[#FEEEFB] px-3 py-2">
        <div className="flex">
          <p>{timeFrom}-</p>
          <p>{timeUntil}</p>
        </div>
        <p className="font-extrabold text-xl">{materis}</p>
        <p className="">{pengajars}</p>
      </div>
      <div className="border-2 rounded-xl bg-[#FEEEFB] px-3 py-2">
        <a href="">{ruangans}</a>
      </div>
    </div>
  );
}
