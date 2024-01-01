import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { PropTypes } from "prop-types";
import fetchData from "../apis/ProductsApi";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isMount = useRef(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const d = await fetchData();
      setData(d);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    if (!isMount.current) {
      getData();
      isMount.current = true;
    }
  }, [getData]);
  return (
    <ProductsContext.Provider value={{ data, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};
ProductsProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
