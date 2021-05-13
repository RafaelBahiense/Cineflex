import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import styled from "styled-components";

import {ContainerWrapper} from "../../Container";
import TitleBox from "../TitleBox/TitleBox";
import Seat from "./Seat";
import Footer from "../Footer/Footer";

export default function Seats () {
    const [seats, setSeats] = React.useState([]);
    const params = useParams();

    useEffect(() => {
        const request =  axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${params.idSession}/seats`);
        request.then((response) => {
          console.log(response.data);
        setSeats({...response.data})})
      }, [params]) 

    if(!seats.seats){
        return "Carregando";
    }

    return (
        <>
            <ContainerWrapper size={"693px"}>
                <TitleBox title={"Selecione o(s) assento(s)"} />
                <SeatsList>
                    {seats.seats.map((seat) => <Seat id={seat.id}/>)}
                </SeatsList>
            </ContainerWrapper>
            <Footer title={seats.movie.title} posterURL={seats.movie.posterURL}/>
        </>
    );
}

const SeatsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;