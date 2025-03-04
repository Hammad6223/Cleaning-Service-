import { Routes, Route } from "react-router-dom"; 
import OneTimeServices from "../src/Components/squareFtservices";
import Price from "../src/Components/Price";
import HomeContent from "../src/Components/Home";


const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<HomeContent />} />
      <Route path="/onetime-services" element={<OneTimeServices />} />
      <Route path="/price" element={<Price />} />
    </Routes>
    </>
  );
};

export default App;
