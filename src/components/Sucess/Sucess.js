import {useLocation, Link} from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";

import ContainerWrapper from "../../Container";
import TitleBox from "../TitleBox/TitleBox";
import styled from "styled-components";

export default function Sucess () {
    let location = useLocation();

    useEffect(() => {
        const request =  axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`, location.state);
        request.then();
      }, [location.state])  

    return (
        <ContainerWrapper>
            <TitleBox title={(<TitleWrapper>Pedido feito<br></br>com sucesso!</TitleWrapper>)} color={"#247A6B"}/>
            <Title>Filme e sessão</Title>
            <Info>{location.state.title}</Info>
            <Info>{`${location.state.date} ${location.state.session}`}</Info>
            <Title>Ingressos</Title>
            {location.state.compradores.map((obj) => <Info key={obj.idAssento}>{`Assento ${obj.assento}`}</Info>)}
            {location.state.compradores.map((obj) =><div key={obj.idAssento}>
                                                        <Title>Comprador</Title>
                                                        <Info>{`Nome: ${obj.nome}`}</Info>
                                                        <Info>{`CPF: ${obj.cpf}`}</Info>   
                                                    </div>)}
            <Link to={"/"}>
                <Home>Voltar pra Home</Home>
            </Link>

        </ContainerWrapper>
    );
}

const TitleWrapper =  styled.div`
    color: #247A6B;
    text-align: center;
`;

const Title = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin-left: 24px;
    margin-top: 40px;
`;

const Info = styled.p`
    font-size: 22px;
    margin-left: 24px;
    margin-top: 10px;
`;

const Home = styled.button`
    width: 225px;
    height: 42px;
    margin-top: 57px;
    margin-left: 72px;
    margin-bottom: 30px;
    border: none;
    background: #E8833A;
    border-radius: 3px;
    color: #FFFFFF;
    font-size: 18px;
`;