import React, { Fragment } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Search from "./components/Search/Search";
import BeerBar from "./components/BeerBar/Beerbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DC143C"
    },
    common: {
      red: "#DC143C"
    }
  }
});

const App = () => (
  <Fragment>
    <MuiThemeProvider theme={theme}>
      <BeerBar />
      <Search />
    </MuiThemeProvider>
  </Fragment>
);

export default App;
