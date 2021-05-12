import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import React, { useEffect } from "react";



export default function App() {
  const [moviesList, setMoviesList] = React.useState([]);

  useEffect(() => {
    const request =  axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
    request.then()
  })

  return (
      <AppWrapper>
        <Header />
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}>
                  <Catalog />
                </Route>
            </Switch>
        </BrowserRouter>
      </AppWrapper>
  );
}

const AppWrapper = styled.div`
    margin: 0 auto;
    width: 375px;
    height: 877px;
    font-family: Roboto;
`;
