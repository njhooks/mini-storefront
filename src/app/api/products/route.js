export async function GET() {
  const products = [
    { id: 1, name: "Laptop",       price: 1200, category: "Electronics", stock: 6 },
    { id: 2, name: "Desk Chair",   price: 150,  category: "Furniture",   stock: 7 },
    { id: 3, name: "Jeans",        price: 75,   category: "Clothing",    stock: 4 },
    { id: 4, name: "Airpods",      price: 200,  category: "Electronics", stock: 5 },
    { id: 5, name: "Lamp",         price: 40,   category: "Furniture",   stock: 9 },
    { id: 6, name: "T-Shirt",      price: 18,   category: "Clothing",    stock: 10 },
    { id: 7, name: "Headphones",   price: 90,   category: "Electronics", stock: 8 },
    { id: 8, name: "Coffee Table", price: 130,  category: "Furniture",   stock: 3 },
    { id: 9, name: "Jacket",       price: 110,  category: "Clothing",    stock: 2 }
  ];
  return Response.json(products);
}

  