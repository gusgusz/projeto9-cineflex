import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import axios from "axios";

export default function Lista(){
  const [lista, setLista] = useState(false);

  useEffect(() => {
    const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
      requisicao.then((response) => {setLista(response.data)});
     console.log(lista);
     requisicao.catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);

  if(!lista) {
    return "carregando api"

  }
  
  return (
    <Filme>
      <div className="avisoSelecione">
        Selecione o filme
      </div>
      
      {lista.map((filme ) => (
      <div key={filme.id}>
     <Link to={`/${filme.id}/showtimes`}>
        
      <img src={`${filme.posterURL}`}></img>
      </Link>
      </div>
      )
      )}
      
      
   
    </Filme>
  );
};

const Filme = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
  justify-content: space-around;
 
  .avisoSelecione {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    padding: 50px 0;
    width: 100%;
  };

  img{
    background-color: #fafafa;
    height: 193px;
    width: 129px;
    border-radius: 4px;
    margin-left: 27px;
    margin-bottom: 4px;
    padding: 8px;
    box-shadow: 1px 2px rgba(0, 0, 0, 0.1);
  };

  
  

`;

