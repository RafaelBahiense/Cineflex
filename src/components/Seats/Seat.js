import React, { useEffect } from "react";
import styled from "styled-components";

export default function Seat (props) {
    const [selected, setSelected] = React.useState(false);

    return (
        <SeatWrapper 
        isAvailable={props.isAvailable} 
        selected={selected} 
        onClick={
            () => {
                if(props.isAvailable) {
                    if(selected ) {
                        if(window.confirm(`Realmente gostaria de remover o assento ${props.name}`)) {
                            setSelected(false);
                            props.buildBookSeatsObj(props.id, false);
                        }
                    }
                    else {
                        setSelected(true);
                        props.buildBookSeatsObj(props.id, true);
                    }
                }
                else {
                    alert("Indisponivel");  
                }
            }
        }>
            {props.name}
        </SeatWrapper>
    );
}

const SeatWrapper = styled.li`
    display: flex;
    width: 26px;
    height: 25px;
    margin-right: 7px;
    margin-bottom: 19px;
    font-size: 11px;
    background: ${props => props.selected ? "#8DD7CF" : props.isAvailable ? "#C3CFD9" : "#FBE192"};
    border: 1px solid #808F9D;
    box-sizing: border-box;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
`;