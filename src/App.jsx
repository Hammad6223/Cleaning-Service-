import { Routes, Route } from "react-router-dom"; 
import Services from "../src/Components/Services";
import Price from "../src/Components/Price";
import Home from "../src/Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/select-services" element={<Services />} />
      <Route path="/price" element={<Price />} />
    </Routes>
    </>
  );
};

export default App;
