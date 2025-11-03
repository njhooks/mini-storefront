"use client";

export default function CategoryFilter({ value, onChange }) {
  return (
    <label>
      Category:&nbsp;
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option>All</option>
        <option>Electronics</option>
        <option>Furniture</option>
        <option>Clothing</option>
      </select>
    </label>
  );
}
