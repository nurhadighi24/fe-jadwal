import React from "react";

export default function CardMateri({ matkuls, color }) {
  return (
    <p className="px-2 py-1 rounded-xl" style={{ backgroundColor: color }}>
      {matkuls}
    </p>
  );
}
