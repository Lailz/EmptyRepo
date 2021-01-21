import { List } from "../styles";
import Items from "./Items";
import products from "../products";

const Itemslist = () => {
  const productList = products.map((product) => {
    return <Items key={product.id} product={product} />;
  });
  return <List>{productList}</List>;
};

export default Itemslist;
