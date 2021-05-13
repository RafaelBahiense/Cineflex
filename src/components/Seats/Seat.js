import styled from "styled-components";

export default function Seat (props) {
    return (
        <SeatWrapper>{props.id}</SeatWrapper>
    );
}

const SeatWrapper = styled.li`
    margin-right: 7px;
`;