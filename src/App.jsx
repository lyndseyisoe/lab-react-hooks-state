import { useState } from "react";

const initialProducts = [
  { id: 1, name: "Apple", category: "Fruits", price: 1.0, inStock: true },
  { id: 2, name: "Milk", category: "Dairy", price: 2.5, inStock: false },
];

function App() {
  const [products] = useState(initialProducts);
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Filter products
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  // ✅ Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark mode.
      </p>

      {/* ✅ FIXED Toggle Button */}
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      {/* ✅ Filter */}
      <label>Filter by Category: </label>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* ✅ Products */}
      <div>
        <h2>Available Products</h2>

        {filteredProducts.length === 0 ? (
          <p>No products available</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`card ${!product.inStock ? "outOfStock" : ""}`}
            >
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>

              <button
                data-testid={`product-${product.id}`}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* ✅ Cart */}
      <div>
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item) => (
            <p key={item.id}>{item.name} is in your cart</p>
          ))
        )}
      </div>
    </div>
  );
}

export default App;