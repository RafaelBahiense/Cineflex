import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import ContainerWrapper from "../../Container";
import TitleBox from "../TitleBox/TitleBox";
import SessionsList from "./Sessions/SessionsList";

export default function Movie () {
    const [movie, setMovie] = React.useState([]);
    const params = useParams();

    useEffect(() => {
      const request =  axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${params.idMovie}/showtimes`);
      request.then((movie) => {
        setMovie({...movie.data});})
    }, [params])  

    return (
        <ContainerWrapper size={"693px"}>
            <TitleBox title={"Selecione o horário"} />
            {movie.length === 0 ? "Carregando" : <SessionsList {...movie} />}
        </ContainerWrapper>
    );
}