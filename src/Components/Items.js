import { Petfood } from "../styles";

const Items = (props) => {
  const product = props.product;
  return (
    <Petfood>
      <p>{product.name}</p>
      <p className="price">Price: {product.price} USD</p>
      <img src={product.image} alt={product.name} />
    </Petfood>
  );
};

export default Items;
