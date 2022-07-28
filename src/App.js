import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lista from "./Lista";




function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lista />} />
       
      </Routes>
    </BrowserRouter>
  );
}
const Lista = styled.div`
	width: 100px;
	height: 100px;
	background: #FFF;

	img {
		width: 50px;
    heigth: 50px;
	}
`;
export default App;
