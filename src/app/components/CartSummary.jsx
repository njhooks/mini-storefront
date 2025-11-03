"use client";

export default function CartSummary({ cart, products, onDecrement, onReset }) {
  const entries = Object.entries(cart);
  const count = entries.reduce((sum, [, q]) => sum + q, 0);
  const total = entries.reduce((sum, [id, q]) => {
    const p = products.find((x) => x.id === Number(id));
    return sum + (p ? p.price * q : 0);
    }, 0);

  return (
    <div style={{ padding: 8, marginTop: 12, borderTop: "1px solid #eee" }}>
      <h4>Shopping Cart</h4>
      <p>Total Items: {count} | Total Price: ${total}</p>
      {entries.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {entries.map(([id, q]) => {
            const p = products.find((x) => x.id === Number(id));
            return (
              <li key={id} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span>{p?.name}</span>
                <span>x{q}</span>
                <button onClick={() => onDecrement(Number(id))}>−1</button>
              </li>
            );
          })}
        </ul>
      )}
      <button onClick={onReset} style={{ marginTop: 8 }}>Reset Cart</button>
    </div>
  );
}
