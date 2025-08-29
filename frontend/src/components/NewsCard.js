import React from "react";

export default function NewsCard({ item }) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h5 className="font-semibold text-sm">{item.title}</h5>
      <p className="text-xs text-gray-500 mt-2">{item.date}</p>
    </div>
  );
}
