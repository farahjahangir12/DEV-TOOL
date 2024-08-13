import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.PAPERS_KEY;
const API_URL = "https://api.semanticscholar.org/graph/v1";

function useFetch(query, limit) {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async()=>{
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_URL}/paper/search?query=${query}&limit=${limit}&fields=title,abstract,authors,year,citationCount`,{
            headers: {
              'x-api-key': API_KEY
            }
          });
        setPapers(response.data.data);
         setError(null);
      } catch (err) {
        setError(err.message);
        setPapers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query,limit]);

  return {papers,loading,error};
}

export default useFetch;
