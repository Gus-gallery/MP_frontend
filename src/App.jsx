import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";
import Stories from "./pages/Stories";

export default function App() {
  
  return (     
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </main>
  );
}