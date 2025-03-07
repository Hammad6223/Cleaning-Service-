import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Services from "../src/Components/Services";
import Price from "../src/Components/Price";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-services" element={<Services />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
