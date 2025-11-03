"use client";

export default function ProductCard({ product, onAdd }) {
  const { name, price, category, stock } = product;
  const out = stock <= 0;

  return (
    <div style={{ padding: 12, border: "1px solid #ccc", borderRadius: 6 }}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <p>{out ? "Out of stock" : `In stock: ${stock}`}</p>
      <button onClick={onAdd} disabled={out}>
        Add to Cart
      </button>
    </div>
  );
}
