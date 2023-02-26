import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classrooms from "./pages/AllClassrooms";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classrooms" element={<Classrooms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
