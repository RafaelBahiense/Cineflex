import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from 'react-router-dom';
import styled from "styled-components";

import ContainerWrapper from "../../Container";
import TitleBox from "../TitleBox/TitleBox";
import Seat from "./Seat";
import Footer from "../Footer/Footer";
import InputBox from "./InputBox";

export default function Seats () {
    const [seats, setSeats] = React.useState([]);
    const [bookSeatsObj, setBookSeatsObj] = React.useState({ids : [], compradores : []});
    const params = useParams();
    let history = useHistory();

    useEffect(() => {
        const request =  axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${params.idSession}/seats`);
        request.then((response) => {
            bookSeatsObj.title = response.data.movie.title;
            bookSeatsObj.date = response.data.day.date;
            bookSeatsObj.session = response.data.name;
            setSeats({...response.data})})
      }, [params, bookSeatsObj]) 

    function buildBookSeatsObj (id,add, assento) {
        if (add) {
            bookSeatsObj.ids.push(id);
            bookSeatsObj.compradores.push({idAssento : id, nome: "", cpf: "", assento : assento});
        }
        else {
            bookSeatsObj.ids = bookSeatsObj.ids.filter((arrayId) => arrayId !== id);
            bookSeatsObj.compradores = bookSeatsObj.compradores.filter((compradorObj) => compradorObj.idAssento !== id);
        }
        setBookSeatsObj({...bookSeatsObj});
    }

    function setBookSeatsObjInfo (id, info) {
        const pos = bookSeatsObj.compradores.map((obj) => obj.idAssento).indexOf(id);
        bookSeatsObj.compradores[pos].nome = info.nome;
        bookSeatsObj.compradores[pos].cpf = info.cpf;
        setBookSeatsObj({...bookSeatsObj});
    }

    function postBookedSeats() {
        const isValidNames = bookSeatsObj.compradores.map((obj) => obj.nome).indexOf("");
        const isValidCPF = bookSeatsObj.compradores.map((obj) => obj.cpf).indexOf("");
        if (bookSeatsObj.compradores.length === 0) {
            alert("Selecione algum assento!");
        }
        else if (isValidNames >= 0 || isValidCPF >= 0) {
            alert("Preecha todos os dados");
        } 
        else{
            history.push("/sucesso", {...bookSeatsObj});
        }
    }

    if(!seats.seats){
        return "Carregando";
    }

    return (
        <>
            <ContainerWrapper size={"693px"}>
                <TitleBox title={"Selecione o(s) assento(s)"} />
                <SeatsList>
                    {seats.seats.map((seat) => <Seat key={seat.id} id={seat.id} buildBookSeatsObj={buildBookSeatsObj} {...seat}/>)}
                </SeatsList>
                <Infos>
                    <Info>
                        <SeatInfo color={"#8DD7CF"}/>
                        <p>Selecionado</p>
                    </Info>
                    <Info>
                        <SeatInfo color={"#C3CFD9"}/>
                        <p>Disponível</p>
                    </Info>
                    <Info>
                        <SeatInfo color={"#FBE192"}/>
                        <p>Indisponível</p>
                    </Info>
                </Infos>
                {bookSeatsObj.compradores.map((obj, index) => 
                    <InputBox key={obj.idAssento} index={index} idAssento={obj.idAssento} setBookSeatsObjInfo={setBookSeatsObjInfo}></InputBox>
                )}
                <BookSeats onClick={postBookedSeats}>Reservar assento(s)</BookSeats>
            </ContainerWrapper>
            <Footer title={seats.movie.title} posterURL={seats.movie.posterURL}/>
        </>
    );
}

const SeatsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-left: 24px;
`;

const Infos = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 55px;
    margin-right: 40px;
`;

const Info = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
`;

const SeatInfo = styled.div`
    display: flex;
    width: 26px;
    height: 25px;
    margin-right: 7px;
    margin-bottom: 19px;
    font-size: 11px;
    background: ${props => props.color};
    border: 1px solid #808F9D;
    box-sizing: border-box;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
`;

const BookSeats = styled.button`
    width: 225px;
    height: 42px;
    margin-top: 57px;
    margin-left: 72px;
    margin-bottom: 30px;
    border: none;
    background: #E8833A;
    border-radius: 3px;
    color: #FFFFFF;
    font-size: 18px;
`;