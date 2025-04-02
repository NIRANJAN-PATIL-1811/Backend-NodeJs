import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./First.jsx";
import Products from "./Products.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;