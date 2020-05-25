import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid } from "semantic-ui-react";
//import logo from './logo.svg';
import "../../gfx/styles/App.css";
import Companies from "../ui/Companies.js";
import Header from "../ui/Header.js";
import Search from "../ui/Search.js";
import ShipmentDetails from "../ui/ShipmentDetails.js";
const App = () => {
  const [url, setUrl] = useState("local_shipments.json");
  useEffect(() => {
    console.log("app has been loaded");
    console.log(url);
  }, [url]);
  return (
    <Container>
      <Header />
      <Grid celled columns={2}>
        <Grid.Column computer={5} tablet={6} mobile={16}>
          <Companies url={url} />
        </Grid.Column>

        <Grid.Column computer={11} tablet={10} mobile={16}>
          <Search />
          <ShipmentDetails />
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default App;
