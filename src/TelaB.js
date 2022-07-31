import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
import Navbar from "./Navbar";


export default function TelaB(){

    const params = useParams();
    const [filme, setFilme] = useState(false);


  useEffect(() => {
    const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.id}/showtimes`);
      requisicao.then((response) => {setFilme(response.data.days) ; console.log(filme)});
      requisicao.catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
      console.log();
      
      
 
     
  }, []);


  if(!filme) {
    return "carregando api"

  }
  console.log(filme);
    return(
        <>
        <Navbar />
        <Horario>
        <div className="avisoSelecione">
        Selecione o horário
      </div>
        <div className="content">
            {(filme).map((day) => (<>
            <div>{day.weekday} - {day.date}</div>
            <div>{(day.showtimes).map((hora) => (<Link to={`/showtimes/${hora.id}/seats`}><button>{hora.name}</button></Link>))}</div>
            </>
            ))}
           
        </div>
        </Horario>
        </>
    );
}

const Horario = styled.div`



    .avisoSelecione{
        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        text-align: center;
        padding: 50px 0;
        width: 100%;
    };
    .content {
        padding-left: 18px;  
      };
    button{
        height: 43px;
        width: 82px;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        text-align: center;
        color: #FFFFFF;
        background-color: #E8833A;
        margin: 38px 5px 38px 0;


    }
`;