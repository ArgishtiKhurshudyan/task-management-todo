import  { useEffect, useReducer, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
        forceUpdate();
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url,reducerValue]);

  return { data, error };
};

export default useFetch;
