import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import TitleBox from "../TitleBox/TitleBox";
import {ContainerWrapper} from "../../Container";
import Movie from "./Movie";

export default function Catalog() {
    const [moviesList, setMoviesList] = React.useState([]);

    useEffect(() => {
      const request =  axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
      request.then((response) => setMoviesList([...response.data]))
    }, [])  

    return (
        <ContainerWrapper>
            <TitleBox title={"Selecione o filme"}/>
            <MoviesList>
                {moviesList.map((movie, key) => <Movie key={key} {...movie}/> )}
            </MoviesList>
        </ContainerWrapper>
    );
}

const MoviesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;