import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movie (props) {
    return (
        <Link to={`/filme/${props.id}`}>
            <MovieWrapper>
                <Img src={props.posterURL}/>
            </MovieWrapper>
        </Link>
    );
}

const MovieWrapper = styled.li`
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 11px;
`;

const Img = styled.img`
    width: 129px;
    height: 193px;
`;