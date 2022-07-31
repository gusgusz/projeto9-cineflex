import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

export default function TelaC(){

    const paramsC = useParams();
    const [sessao, setSessao] = useState(false);


  useEffect(() => {
    const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${paramsC.id}/seats`);
      requisicao.then((response) => {setSessao(response.data) ; console.log(sessao)});
      requisicao.catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
      console.log();
      
      
 
     
  }, []);


  if(!sessao) {
    return "carregando api"

  }

    return(
        <>
        <Navbar />
        <Cadeiras>
            <div className="avisoSelecione">
            Selecione o(s) assento(s)
            </div>
            <div className="assentos">
                
                {(sessao.seats).map((cadeira) => (<div className="bolinha">{cadeira.name}</div>))}
                
            </div>
      
        </Cadeiras>
        </>
      
    );
}

const Cadeiras = styled.div`

 
.avisoSelecione{
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    padding: 50px 0;
    width: 100%;
};
.assentos{
   
    margin: 0 auto;
    width: 300px;
    display: flex;
    justify-content: center;
    align-itens: center;
    flex-wrap: wrap;
    height: 180px;
    
};

.bolinha{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin: 5px;
    background-color: #808F9D;
    align-text: center;

    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    
    display: flex;
    align-items: center;
    justify-content: center;



};
`;