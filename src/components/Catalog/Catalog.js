import styled from "styled-components";

import TitleBox from "../TitleBox/TitleBox";
import {ContainerWrapper} from "../../Container";
import Movie from "./Movie";

export default function Catalog() {
    return (
        <ContainerWrapper>
            <TitleBox />
            <MoviesList>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
            </MoviesList>
        </ContainerWrapper>
    );
}

const MoviesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;