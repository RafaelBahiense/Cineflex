import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Day (props) {
    return (
        <DayWrapper>
            <Date>{props.weekday + " - " + props.date}</Date>
            <Sessions>
                {props.showtimes.map((show) => <li key={show.id}><Link to={`/sessao/${show.id}`}><Session>{show.name}</Session></Link></li> )}
            </Sessions>
        </DayWrapper>
        
    );
}

const DayWrapper = styled.li`
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 25px;
`;

const Date = styled.p`
    font-size: 18px;
`;

const Sessions = styled.ul`
    display: flex;
`;

const Session = styled.button`
    width: 82px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    border: none;
    margin-right: 8px;
`;