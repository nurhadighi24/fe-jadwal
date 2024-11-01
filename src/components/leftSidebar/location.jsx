import React from "react";

export default function Location({ time, location, className }) {
  return (
    <div className={className}>
      <p>{time}</p>
      <p>{location}</p>
    </div>
  );
}
