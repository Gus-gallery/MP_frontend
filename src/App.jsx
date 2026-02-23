import Cart from "./components/Cart";
import Products from "./components/Products";
import Header from "./components/Header";

export default function App() {
  
  return (
    <div className="app">
      <header>
        <Header />
      </header>

      <main className="produkter">
        <div>
          <Products />
        </div>
      </main>

      
    </div>
  );
}