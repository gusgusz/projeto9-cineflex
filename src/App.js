import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Initial from "./Initial";
import TelaB from "./TelaB";
import TelaC from "./TelaC";
import TelaD from "./TelaD";




function App() {
   const [valor, setValor] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/:id/showtimes" element={<TelaB />} />
        <Route path="/showtimes/:id/seats" element={<TelaC setValor={setValor} />} />
        <Route path="/sucesso" element={<TelaD valor={valor} />} />
        
        

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
