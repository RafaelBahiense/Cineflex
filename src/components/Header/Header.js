import styled from "styled-components";


export default function Header () {
    return (
        <HeaderWrapper>
            <Heading>CINEFLEX</Heading>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0px;
    height: 67px;
    width: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C3CFD9;
`;

const Heading = styled.h1`
    color: #E8833A;
    font-size: 34px;
    font-weight: 400;
`;
