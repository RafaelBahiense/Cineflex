import styled from "styled-components";

import Footer from "../../Footer/Footer";
import Day from "./Day";

export default function SessionsList (props) { 
    console.log(props);
    return (
        <>
            <SessionsListWrapper>
                {props.days.map((day) => <Day key={day.id} {...day}/>)}
            </SessionsListWrapper>
            <Footer title={props.title} posterURL={props.posterURL}/>
        </>
        
    );
}

const SessionsListWrapper = styled.ul`
    padding-left: 24px;
`;