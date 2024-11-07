import React from "react";

export default function CardMateri({ matkuls, color }) {
  return (
    <p
      className="px-2 py-3 rounded-xl text-white"
      style={{ backgroundColor: color }}
    >
      {matkuls}
    </p>
  );
}
