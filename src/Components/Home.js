import { Description, ShopImage, Title } from "../styles";

const Home = () => {
  return (
    <>
      <Title>Pets Shop</Title>

      <Description>
        Large range of Products for Pets that include Food, Accessories, Litter,
        Cages, Supplement and more at affordable prices.
      </Description>
      <ShopImage src={window.location.origin + `/petshop.jpg`} alt="petshop" />
    </>
  );
};

export default Home;
