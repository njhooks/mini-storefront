"use client";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import CartSummary from "./CartSummary";
import StatusMessage from "./StatusMessage";

export default function Catalog() {
  const [status, setStatus] = useState("loading");
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: "All", price: "" });
  const [cart, setCart] = useState({}); 

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    const id = setInterval(() => {
      setProducts((prev) => {
        const list = [...prev];
        const i = Math.floor(Math.random() * list.length);
        const delta = Math.random() < 0.5 ? -1 : 1;
        const next = Math.max(0, (list[i].stock ?? 0) + delta);
        list[i] = { ...list[i], stock: next };
        return list;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [products.length]);

  const updateFilter = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const visible = products.filter((p) => {
    const catOk = filters.category === "All" || p.category === filters.category;
    const priceOk =
      filters.price === "" || Number(p.price) <= Number(filters.price);
    return catOk && priceOk;
  });

  const addToCart = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p))
    );
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  const decrementOne = (id) => {
    if (!cart[id]) return;
    setCart((prev) => {
      const next = { ...prev, [id]: prev[id] - 1 };
      if (next[id] <= 0) delete next[id];
      return next;
    });
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: (p.stock ?? 0) + 1 } : p))
    );
  };

  const resetCart = () => {
    setProducts((prev) =>
      prev.map((p) => ({ ...p, stock: (p.stock ?? 0) + (cart[p.id] ?? 0) }))
    );
    setCart({});
  };

  return (
    <section>
      <h1>Mini Storefront</h1>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <CategoryFilter
          value={filters.category}
          onChange={(v) => updateFilter("category", v)}
        />
        <PriceFilter
          value={filters.price}
          onChange={(v) => updateFilter("price", v)}
        />
      </div>

      <CartSummary
        cart={cart}
        products={products}
        onDecrement={decrementOne}
        onReset={resetCart}
      />

      <StatusMessage status={status} isEmpty={status === "success" && visible.length === 0} />

      {status === "success" && visible.length > 0 && (
        <ProductList products={visible} onAdd={addToCart} />
      )}
    </section>
  );
}
