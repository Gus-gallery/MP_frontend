import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";
import Stories from "./pages/Stories";
import Thanks from "./pages/Thanks";

export default function App() {
  
  return (     
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </main>
  );
}