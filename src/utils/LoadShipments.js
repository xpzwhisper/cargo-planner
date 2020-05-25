//import React from "react";
import useFetch from "./hooks";

const LoadShipments = (url) => {
  const res = useFetch(url, { isLoading: true, data: null });
  console.log(res);
  if (res.data == null) {
    return false;
  }
  return res;
};

export default LoadShipments;
