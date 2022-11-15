import React from "react";
import axios from "axios";

function useFetch(url) {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    try {
      const { data: responseData } = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [url]);

  return { error, loading, data };
}

export default useFetch;
