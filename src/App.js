import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import Movie from "./components/Movie/Movie";
import Seats from "./components/Seats/Seats";


export default function App() {
  return (
      <AppWrapper>
        <Header />
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}>
                  <Catalog />
                </Route>
                <Route path="/filme/:idMovie" exact={true}>
                  <Movie />
                </Route>
                <Route path="/sessao/:idSession" exact={true}>
                  <Seats />
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
