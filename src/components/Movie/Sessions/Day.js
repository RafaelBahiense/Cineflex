import styled from "styled-components";

export default function Day (props) {
    return (
        <>
            <Date>{props.weekday + " - " + props.date}</Date>
            <Sessions>
                {props.showtimes.map((show) => <Session key={props.id}>{show.name}</Session>)}
            </Sessions>
        </>
        
    );
}

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
`;