import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;



const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>
        Products {window.location.pathname === "/Deals" ? "In Deal" : null}
      </Title>
      
      <Products hasDiscount={window.location.pathname === "/Deals"} />
    </Container>
  );
};

export default ProductList;
