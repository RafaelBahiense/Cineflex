import styled from "styled-components";

export default function Footer (props) {
    console.log(props);
    return (
        <FooterWrapper>
            <MoviePosterFrame>
                <MoviePoster src={props.posterURL}/>
                <p>{props.title}</p>
            </MoviePosterFrame>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
    display: flex;
    position: fixed;
    top: 760px;
    height: 117px;
    width: 375px;
    padding: 8px;
    background: #DFE6ED;
    border-top: 1px solid #9EADBA;
    align-items: center;
`;

const MoviePosterFrame = styled.div`
    height: 89px;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    background: #FFFFFF;
`;

const MoviePoster = styled.img`
    width: 48px;
    height: 72px;
`;