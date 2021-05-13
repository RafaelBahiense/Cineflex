import styled from 'styled-components';

export default function TitleBox (props) {
    return (
        <TitleBoxWrapper>
            <Title>{props.title ? props.title : "text"}</Title>
        </TitleBoxWrapper>
    );
}
    
const TitleBoxWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 102px;
`;

const Title = styled.h2`
font-size: 24px;
`;
