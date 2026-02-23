import Products from "./components/Products";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  
  return (
    <div className="app">
      <header className="top-0 sticky z-10">
        <Header />
      </header>

      <main className="produkter">
        <div>
          <Hero />
          <Products />
        </div>
      </main>

      
    </div>
  );
}