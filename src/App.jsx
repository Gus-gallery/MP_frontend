import { useState } from "react";
import Cart from "./components/Cart";
import useCart from "./store/useCart";
import Products from "./components/Products";

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
        <div>
          <Products />
        </div>
      </main>

      {kurvAaben && <Cart onClose={() => setKurvAaben(false)} />}
    </div>
  );
}