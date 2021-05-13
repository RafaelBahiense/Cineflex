import styled from "styled-components";
import Day from "./Day";

export default function SessionsList (props) { 
    return (
        <SessionsListWrapper>
            {props.days.map((day) => <Day {...day}/>)}
        </SessionsListWrapper>
        
    );
}

const SessionsListWrapper = styled.ul`
    padding-left: 24px;
`;