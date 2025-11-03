"use client";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
  return (
    <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={() => onAdd(p.id)} />
      ))}
    </div>
  );
}

