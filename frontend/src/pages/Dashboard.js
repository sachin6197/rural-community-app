import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5000/api/me", { headers: { Authorization: `Bearer ${token}` } }).then((res) => setUser(res.data));
    axios.get("http://localhost:5000/api/bookings", { headers: { Authorization: `Bearer ${token}` } }).then((res) => setBookings(res.data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">Your Bookings</h3>
      <ul className="list-disc ml-6 space-y-1">
        {bookings.map((b, i) => (
          <li key={i}>
            {b.productName} - {b.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
