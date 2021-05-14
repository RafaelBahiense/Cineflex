import React, { useEffect } from "react";
import styled from "styled-components";

export default function InputBox (props) {
    const [buyerInfo, setBuyerInfo] = React.useState({nome: "", cpf: ""});

    return (
       <InputBoxWrapper>
        <div>
            <p>{`Nome do comprador ${props.index + 1}:`}</p>
            <input placeholder={"Digite seu nome..."} value={buyerInfo.nome} onChange={(event) => 
                {buyerInfo.nome = event.target.value; props.setBookSeatsObjInfo(props.idAssento, buyerInfo); setBuyerInfo({...buyerInfo})}
            }/>
        </div>
        <div>
            <p>{`CPF do comprador ${props.index + 1}:`}</p>
            <input placeholder={"Digite seu CPF..."} value={buyerInfo.cpf} onChange={(event) => 
                {buyerInfo.cpf = event.target.value; props.setBookSeatsObjInfo(props.idAssento, buyerInfo); setBuyerInfo({...buyerInfo})}
            }/>
        </div>
       </InputBoxWrapper>
    );
}


const InputBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 170px;
    margin-top: 30px;
    margin-left: 24px;
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 76px;
        input {
        height: 51px;
        width: 327px
        }
    }
`;