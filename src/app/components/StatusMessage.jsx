"use client";

export default function StatusMessage({ status, isEmpty }) {
  if (status === "loading") return <p>Loading…</p>;
  if (status === "error") return <p>Error loading products.</p>;
  if (isEmpty) return <p>No products match the current filters.</p>;
  return null;
}
