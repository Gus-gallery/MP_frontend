import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import useCart from "./store/useCart";
import products from "./products";
import "./App.css";

export default function App() {
  const [kurvAaben, setKurvAaben] = useState(false);
  const count = useCart(s => s.count);

  return (
    <div className="app">
      <header>
        <h1>Min Webshop</h1>
        <button className="kurv-knap" onClick={() => setKurvAaben(true)}>
          🛒 Kurv ({count()})
        </button>
      </header>

      <main className="produkter">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </main>

      {kurvAaben && <Cart onClose={() => setKurvAaben(false)} />}
    </div>
  );
}