import { useState, useEffect } from "react";
import styled from 'styled-components';

import axios from "axios";

export default function Lista(){
  const [lista, setLista] = useState(false);

  useEffect(() => {
    const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
      requisicao.then((response) => setLista(response.data));
     console.log(lista);
     
  }, []);

  if(!lista) {
    return "carregando api"

  }
  
  return (
    <div className="App">
      
      {lista.map((filme ) => (<img src={`${filme.posterURL}`}></img>))}
        
      
   
    </div>
  );
};

const App = styled.div`
	width: 100px;
	height: 100px;
	background: #FFF;

	img {
		width: 50px;
    heigth: 50px;
	}
`;