import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "./Initial";
import TelaB from "./TelaB";
import TelaC from "./TelaC";




function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/:id/showtimes" element={<TelaB />} />
        <Route path="/showtimes/:id/seats" element={<TelaC />} />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
