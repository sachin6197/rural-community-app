import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "../components/ServiceCard";
import ProductCard from "../components/ProductCard";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/services").then((res) => setServices(res.data));
    axios.get("http://localhost:5000/api/products").then((res) => setProducts(res.data));
    axios.get("http://localhost:5000/api/news").then((res) => setNews(res.data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Available Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">News & Updates</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {news.map((n, i) => (
            <NewsCard key={i} item={n} />
          ))}
        </div>
      </section>

      <section className="mt-10 mb-12">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
          <textarea placeholder="Your Message" className="w-full border p-2 rounded" />
          <button className="bg-teal-700 text-white px-4 py-2 rounded">Send</button>
        </form>
        <div className="mt-4 text-sm">
          <p>Address: Village Market Road, Block A</p>
          <p>Helpline: +91 98765 43210</p>
        </div>
      </section>
    </div>
  );
}
