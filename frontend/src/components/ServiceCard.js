import React from "react";

export default function ServiceCard({ service }) {
  return (
    <div className="border rounded-lg p-4 flex items-center gap-4 hover:shadow">
      <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded">
        <img src={service.icon || "/assets/services/service1.svg"} alt={service.name} className="w-10 h-10" />
      </div>
      <div>
        <h4 className="font-semibold">{service.name}</h4>
      </div>
    </div>
  );
}
