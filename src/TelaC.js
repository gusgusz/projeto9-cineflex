import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

export default function TelaC({setValor}){

    const paramsC = useParams();
    const [sessao, setSessao] = useState(false);
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    const [value, setValue] = useState(true);
    const [ids, setIds] = useState([]);
    


    function enviar(event) {
      event.preventDefault();
      axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
      	ids: ids,
	      name: name,
	      cpf: cpf
      });}
   

    // function Estilo(){
    //   setValue(!value);
    //   const [cor, setCor] = useState("");

    //   if(cadeira.isAvailable){    
    //   if(value){
    //     setCor("#C3CFD9");
    //     return <Seleciona background-color={cor}/>;
    //   }
    //   else{
    //     setCor( '#8DD7CF');
    //     return <Seleciona background-color={cor}/>;
    //   }}
    //   else{
    //     setCor( '#FBE192');
    //     return <Seleciona background-color={cor}/>;
    //   }
    // };
   

  useEffect(() => {
    const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${paramsC.id}/seats`);
      requisicao.then((response) => {setSessao(response.data) ; console.log(sessao)});
      requisicao.catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
      console.log();
      
      
 
     
  }, []);

  
let horario = sessao.name;
let semana = sessao.weekday;
let mes = sessao.date;

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
                
                {(sessao.seats).map((cadeira) => (<Asset cadeira={cadeira} ids={ids} setIds={setIds}></Asset>))}
                
            </div>
           <div className="info">
            <div className="info-assento">
            <div><div className="bolinha selecionado"></div>Selecionado</div>
            <div><div className="bolinha disponivel"></div>Disponível</div>
            <div><div className="bolinha indisponivel"></div>Indisponível</div>
            </div>

            <div className="info-cliente"> 
            <form onSubmit={enviar}>
            <label for="campoNome">Nome do comprador:</label>
            <input type="name" id="campoNome" placeholder="Digite seu nome..." value={name} onChange={e => setName(e.target.value)} />
            <label for="campoCPF">CPF do comprador:</label>
            <input type="cpf" id="campoCPF" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)} />
            <Link to={"/sucesso"} ><button type="submit" onClick={() => setValor([ids={ids}, name={name}, cpf={cpf}, horario={horario}, semana={semana}, mes={mes}])}>Reservar assento</button></Link>
              </form>
            </div>
           </div>
        </Cadeiras>
        </>
      
    );
}



function Asset({cadeira , ids, setIds}){
  const [cor, setCor] = useState(false);
  const [valido, setValido] = useState(cadeira.isAvailable);
  
  function selecionar(valido, id, cor, setCor){
    if(!valido){
      alert("Esse assento esta indisponível!")
    }
    else{
      if(!cor){
        setIds([...ids, id]);
        setCor(!cor);
      }
      else{
        setIds(ids.filter((el) => el != id ));
        setCor(!cor);
        
      }
      
    }
  };

  return(
    <>
    <BolinhaE valido={valido} cor={cor} onClick={() =>{selecionar(cadeira.isAvailable, cadeira.id, cor, setCor)}  }>{cadeira.name}</BolinhaE>
   
    </>
  );

};

const BolinhaE = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin: 5px;
  
    align-text: center;

    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({valido , cor}) => !valido ? "#FBE192" : cor ? "#8DD7CF" : "#C3CFD9"};

`;

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
  
    align-text: center;

    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    
    display: flex;
    align-items: center;
    justify-content: center;



};
.indisponivel{
  background-color: #FBE192;
};
.disponivel{
  background-color: #C3CFD9;
};
.selecionado{
  background-color: #8DD7CF;
};
.info-assento{
  display: flex;
  flex-wrap: non-wrap;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
  
  
};

.info-assento > div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-bottom: 26px;
};
.info-cliente form{
  display: flex;
  flex-direction: column;
  width: 87%;
  margin-top: 18px;
 
};
form > input{
  border: 1px solid #D4D4D4;
  height: 51px;
  width: 327px;
  border-radius: 3px;
  margin: 8px auto;
  

};
input::placeholder{
  color: #D4D4D4;
  margin-left: 8px;
}
label {
  font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 21px;
text-align: left;
margin-left: 10px;



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