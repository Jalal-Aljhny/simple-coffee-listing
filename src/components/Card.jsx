import propTypes from "prop-types";
import rateIcon from "../assets/icons/Star_fill.svg";
import unrateIcon from "../assets/icons/Star.svg";
const CoffeeCard = ({
  image,
  name,
  rating,
  votes,
  price,
  available,
  popular,
}) => {
  return (
    <div className="card">
      <div className="img">
        <img src={image} alt="product" />
        {popular ? <small>Popular</small> : null}
      </div>
      <div className="detail">
        <div>
          <h2>{name}</h2>
          <div className="rate">
            {rating ? (
              <>
                <img src={rateIcon} alt="rate " />
                <p>{rating}</p>
                <small>({votes}votes)</small>
              </>
            ) : (
              <>
                <img src={unrateIcon} alt="rate" />
                <small>No ratings</small>
              </>
            )}
          </div>
        </div>
        <div>
          <p className="price">{price}</p>
          {!available ? <p>Sold out</p> : null}
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
CoffeeCard.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  rating: propTypes.oneOfType([propTypes.string, propTypes.number]),
  votes: propTypes.number,
  price: propTypes.string,
  available: propTypes.bool,
  popular: propTypes.bool,
};
