import styled from "styled-components";

export default function Movie () {
    return (
        <MovieWrapper>
            <Img src={"https://www.kinoplex.com.br/filmes/images/cartaz/262x388/godzilla-vs-kong.jpg"}/>
        </MovieWrapper>
    );
}

const MovieWrapper = styled.li`
    width: 145px;
    height: 209px;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 11px;
`;

const Img = styled.img`
    width: 129px;
    height: 193px;
`;