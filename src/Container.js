import styled from "styled-components";

const ContainerWrapper = styled.div`
    height: ${props => props.size ? props.size : "810px"};
    overflow-y: scroll;
    margin-top: 67px;
    background: #FFFFFF;
`;

export default ContainerWrapper;