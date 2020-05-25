import React from "react";
import styled from "@emotion/styled";
import LoadShipments from "../../utils/LoadShipments.js";

const CompaniesStyles = styled.div`
  border: 1px #386680 solid;
  padding: 20px 0;
  background-color: #f9f9ff;
  max-height: 400px;
  overflow: auto;
  p {
    padding: 0;
    margin: 0;
    color: #aaf;
    font-family: monospace;
    font-size: 18px;
    text-align: center;
    &:hover {
      color: #33f;
      font-weight: bold;
      cursor: pointer;
    }
  }
  @media (max-width: 764px) {
    max-height: 180px;
    overflow: auto;
  }
`;

const Companies = (props) => {
  // console.log(companies.data);
  // console.log(url);
  const companies = LoadShipments(props.url);
  console.log(companies);

  if (companies.isLoading) {
    console.log("tere");
    return (
      <div>
        <h2>Please wait....</h2>
      </div>
    );
  } else if (!companies) {
    console.log("JAH");
    return (
      <div>
        <h2>no locally saved shipments!</h2>
      </div>
    );
  }

  //
  return (
    <CompaniesStyles>
      {companies.data.map((company, index) => (
        <p key={index}>{company.name}</p>
      ))}
    </CompaniesStyles>
  );
};

export default Companies;
