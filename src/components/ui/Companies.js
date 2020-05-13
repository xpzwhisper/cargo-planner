import React from "react";
import useFetch from "../../utils/hooks";
//import displayData from "./DisplayData.js";

function Companies() {
  const url = "local_shipments.json";
  const companies = useFetch(url, { isLoading: true, data: null });
  console.log(companies.data);
  if (!companies.data || companies.isLoading) {
    return "";
  }
  return (
    <div className="six wide column">
      <div className="ui vertical fluid tabular menu">
        {companies.data.map((company, index) => (
          <p key={index} className="ui button item">
            {company.name}
          </p>
        ))}
        <p className="ui active green button item">Something</p>
      </div>
    </div>
  );
}

export default Companies;
