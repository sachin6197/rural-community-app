import React from "react";

export default function ProductCard({ product, onAdd, onRemove }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm flex flex-col">
      <div className="h-36 flex items-center justify-center">
        <img src={product.image || "/assets/products/product1.svg"} alt={product.name} className="max-h-full max-w-full" />
      </div>
      <div className="mt-4 flex-1">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="mt-2 text-teal-700 font-medium">₹{product.price?.toFixed ? product.price.toFixed(2) : product.price}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={() => onAdd && onAdd(product)} className="flex-1 py-2 bg-teal-700 text-white rounded">
          Add
        </button>
        <button onClick={() => onRemove && onRemove(product)} className="py-2 px-3 border rounded">
          -
        </button>
      </div>
    </div>
  );
}
