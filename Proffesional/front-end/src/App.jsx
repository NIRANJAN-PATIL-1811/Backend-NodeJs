import Child1 from "./Child1.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/get_token" element={<Child1/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;