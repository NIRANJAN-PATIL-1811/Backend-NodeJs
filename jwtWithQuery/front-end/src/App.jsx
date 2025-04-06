import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./First.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;