import React from "react";
import styled from "@emotion/styled";

//import displayData from "./DisplayData.js";
//import { Button, GridRow } from "semantic-ui-react";
const HeaderStyle = styled.div`
  h2 {
    font-size: 30px;
    text-align: center;
    color: #557;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h2>Cargo Planner 1.0</h2>
    </HeaderStyle>
  );
};

export default Header;
