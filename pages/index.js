import React from "react"
import Nav from "../components/Nav"
import ProductList from "../components/ProductList"
import { CartProvider } from "../components/CartContext"

export default function App() {
  return (
    <CartProvider>
      <div className="App">
        <Nav />
        <ProductList />
      </div>
    </CartProvider>
  );
}
