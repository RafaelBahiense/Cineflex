import ContainerWrapper from "../../Container";
import {useLocation} from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";

export default function Sucess () {
    let location = useLocation();
    console.log(location.state);

    useEffect(() => {
        const request =  axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`, location.state);
        request.then((response => console.log(response)));
      }, [])  

    return (
        <ContainerWrapper></ContainerWrapper>
    );
}