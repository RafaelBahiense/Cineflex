import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import {ContainerWrapper} from "../../Container";
import TitleBox from "../TitleBox/TitleBox";
import SessionsList from "./Sessions/SessionsList";

export default function Movie (props) {
    const [movie, setMovie] = React.useState([]);
    const params = useParams();

    useEffect(() => {
      const request =  axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${params.idMovie}/showtimes`);
      request.then((movie) => {
        console.log(movie.data);  
        setMovie({...movie.data});})
    }, [])  
    if(movie.length === 0){
        return (<p>Carregando</p>);
    }
    return (
        <ContainerWrapper>
            <TitleBox title={"Selecione o horário"} />
            <SessionsList days={movie.days}/>
        </ContainerWrapper>
    );
}