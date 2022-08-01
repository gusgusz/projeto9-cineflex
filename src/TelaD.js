import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
import Navbar from "./Navbar";

export default function TelaD (valor) {
 return(
    <>
  
    <Navbar />
    <Horario>
    <div className="avisoSelecione">
    Pedido feito
com sucesso!
      </div>
      <div className="titulo">
      Filme e sessão
      </div>
      <div className=".resto">
      {valor.horario}
      </div>
      <button>Volta para HOME</button>
    </Horario>
    </>
 );
};

const Horario = styled.div`



    .avisoSelecione{
      font-family: Roboto;
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0.04em;
      text-align: center;
      color: #247A6B;   
      margin: 15px 0;   
    };
    .titulo{
      font-family: Roboto;
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0.04em;
      text-align: left;
      color: #293845;
      margin: 0 10px;

    };
    .resto{
      font-family: Roboto;
      font-size: 22px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0.04em;
      text-align: left;
      color: #293845;

    }
    button{
      height: 42px;
      width: 225px;
      left: 72px;
      top: 688px;
      border-radius: 3px;
      border: none;
      background-color: #E8833A;
      color: #FFFFFF;
      margin: 8px auto;
      margin-top: 40px;
    
    }
    `;