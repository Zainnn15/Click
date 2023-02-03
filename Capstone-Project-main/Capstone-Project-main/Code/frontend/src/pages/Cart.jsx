import { Add, Remove } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../store/cart";
import { useNavigate } from "react-router-dom";
import { Grid, IconButton, Box } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "non"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductType = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 20;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const ButtonRemoveCart = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setFoodname] = useState("");
  const [type, setTypename] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setimg] = useState("");
  const [_id, setid] = useState("");
  const products = useSelector((state) => state.cart.cart);
  const [foodlistData, setfoodlist] = useState([]);

  useEffect(() => {
    const price = products.reduce((accumulator, curValue) => {
      return Number(accumulator) + Number(curValue.price * curValue.quantity);
    }, 0);
    setPrice(price);
    setfoodlist(products);
  }, [products]);

  const deletefood = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    const token = localStorage.getItem("token");
    if (token === "" || token === null) navigate("/signin");
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continute Shopping?</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({products.length})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8}>
              {foodlistData &&
                foodlistData?.map((foodlist) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                  >
                    <Info>
                      <Product>
                        <ProductDetail>
                          <Image src={foodlist.img} />
                          <Details>
                            <ProductName>
                              <b>Product: </b>
                              {foodlist.title}
                            </ProductName>
                            <ProductType>
                              <b>Type: </b>
                              {foodlist.category}
                            </ProductType>
                          </Details>
                          <PriceDetail>
                            <ProductAmountContainer>
                              <button
                                onClick={() =>
                                  dispatch(incrementQuantity(foodlist._id))
                                }
                              >
                                <Add />
                              </button>
                              <ProductAmount>{foodlist.quantity}</ProductAmount>
                              <button
                                onClick={() =>
                                  dispatch(decrementQuantity(foodlist._id))
                                }
                              >
                                <Remove />
                              </button>
                            </ProductAmountContainer>
                            <ProductPrice>$ {foodlist.price}</ProductPrice>
                          </PriceDetail>

                          <Box display="flex" alignItems={"center"}>
                            <IconButton
                              aria-label="share"
                              onClick={() => deletefood(foodlist._id)}
                            >
                              <DeleteOutline />
                            </IconButton>
                          </Box>
                        </ProductDetail>
                      </Product>
                    </Info>
                  </Grid>
                ))}
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Hr></Hr>
              <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>{price}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Tax (GST)</SummaryItemText>
                  <SummaryItemPrice>13%</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText type="total">Total</SummaryItemText>
                  <SummaryItemPrice>{price + price * 0.13}</SummaryItemPrice>
                </SummaryItem>
                <Button onClick={handleCheckout}>Checkout Now</Button>
              </Summary>
            </Grid>
          </Grid>
        </Bottom>
      </Wrapper>
    </Container>
  );
};
export default Cart;
