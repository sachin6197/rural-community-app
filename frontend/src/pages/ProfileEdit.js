import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProfileEdit() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5000/api/me", { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
      setName(res.data.name);
      setPhone(res.data.phone || "");
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put("http://localhost:5000/api/me", { name, phone }, { headers: { Authorization: `Bearer ${token}` } });
      alert("Profile updated");
    } catch {
      alert("Update failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80 space-y-4">
        <h2 className="text-xl font-bold">Edit Profile</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded" />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full border p-2 rounded" />
        <button className="w-full bg-teal-700 text-white py-2 rounded">Save</button>
      </form>
    </div>
  );
}
