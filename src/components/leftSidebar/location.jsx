import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoBus } from "react-icons/io5";

export default function Location({
  angkatans,
  transports,
  time,
  location,
  className,
}) {
  return (
    <div className={className}>
      <p>{time}</p>
      <p className="font-bold">{angkatans}</p>
      <div className="flex items-center gap-2">
        <FaLocationDot />
        <p>{location}</p>
      </div>
      <div className="flex items-center gap-2">
        <IoBus />
        <p>{transports}</p>
      </div>
    </div>
  );
}
