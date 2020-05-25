import { useState, useEffect } from "react";

function useFetch(url, defaultResponse) {
  const [data, setData] = useState(defaultResponse);

  async function getDataFromAPI(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData({
        isLoading: false,
        data,
      });
    } catch (e) {
      return false;
    }
  }

  useEffect(() => {
    getDataFromAPI(url);
  }, [url]);

  return data;
}
export default useFetch;
