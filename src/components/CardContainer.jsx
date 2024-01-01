import { useCallback, useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductContext";
import Card from "./Card";
import vector from "../assets/icons/vector.svg";

const CardContainer = () => {
  const { data, loading, error } = useContext(ProductsContext);
  const [filterData, setFilterData] = useState([]);
  const [mode, setMode] = useState("all");

  const changleMode = useCallback(
    (mode) => {
      setMode(mode);
      if (mode == "available") {
        let filter = data.filter((p) => p.available);
        setFilterData(filter);
      } else {
        setFilterData(data);
      }
    },
    [data]
  );
  useEffect(() => {
    changleMode("all");
  }, [changleMode]);
  return (
    <div className="container card_cont">
      <div className="card_count_head">
        <h1>Our Collection</h1>
        <img src={vector} alt="vector svg" className="svg" />
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="btns">
          <button
            className={mode == "all" ? "active" : null}
            onClick={() => {
              changleMode("all");
            }}
          >
            All Products
          </button>
          <button
            className={mode == "available" ? "active" : null}
            onClick={() => {
              changleMode("available");
            }}
          >
            Available Now
          </button>
        </div>
      </div>
      <div className="cards">
        {loading ? <p className="loading">loading ...</p> : null}
        {error && !loading ? <p className="error">{error}</p> : null}
        {filterData && !error && !loading
          ? filterData.map((product) => {
              return (
                <Card
                  key={product.name}
                  name={product.name}
                  popular={product.popular}
                  price={product.price}
                  rating={product.rating}
                  available={product.available}
                  votes={product.votes}
                  image={product.image}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default CardContainer;
