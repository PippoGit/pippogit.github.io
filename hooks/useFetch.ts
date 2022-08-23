import { useState, useCallback, useEffect} from "react";

export const useFetch = <T,>(url: string, prevent: boolean = false) => {
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback( async () => {
    try {
      const res = await fetch(url);
      const fetchedData = await res.json() as T;
      setData(fetchedData);
      setFetching(false);
    }
    catch {
      console.error("Error while fetching data");
    }
  }, [url]);

  useEffect( () => {
    if(!prevent) {
      setFetching(true);
      fetchData();
    }
  }, [prevent, fetchData]);

  return {
    fetching, 
    data
  }
}