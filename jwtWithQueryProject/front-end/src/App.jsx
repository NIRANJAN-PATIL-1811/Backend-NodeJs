import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Common from "./Common.jsx";
import Product from "./Product.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/common" element={<Common/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;