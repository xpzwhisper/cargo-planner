import React from "react";
import styled from "@emotion/styled";

const Search = styled.div`
  display: flex;
  input,
  button {
    height: 30px;
    font-size: 25px;
    border-radius: 3px;
  }
  button {
    color: #669;
    background-color: #eef;
    margin-left: 2px;
  }
  input {
    max-width: 80%;
  }
`;
const searchButton_text = "Go";
const SearchSection = (props) => {
  return (
    <Search>
      <input placeholder="Search" type="text" />
      <button>{searchButton_text}</button>
    </Search>
  );
};

export default SearchSection;
