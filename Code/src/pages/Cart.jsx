import { Add, Remove } from "@material-ui/icons";
import React, { useState, useEffect } from "react"; 
import Axios from 'axios';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar'
import styled from 'styled-components'

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
    border: ${props=>props.type === "filled" && "non"};
    background-color: ${props=>
        props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
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

const Cart = () => {

    const [title, setFoodname] = useState('')
    const [type, setTypename] = useState('')
    const [description, setDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [img, setimg] = useState('');

   

    const [foodlist, setfoodlist] = useState([]);


    useEffect(()=> {
       
        Axios.get("http://localhost:3001/cart").then((response)=> {
            setfoodlist(response.data);
          })
      })

        return (
          
        <Container>
            <Navbar/>
            <Announcement/>     
            <Wrapper>
               <Title>Your Bag</Title> 
               <Top>
                <TopButton>Continute Shopping?</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">Checkout</TopButton>
               </Top>
               <Bottom>
                <Info>
                    <Product>
                        {foodlist && 
                        foodlist?.map((foodlist) => (
                                <ProductDetail>
                            <Image src={foodlist.img}/>
                            <Details>
                                <ProductName><b>Product: </b>{foodlist.title}</ProductName>
                                <ProductId><b>Id: </b>4231434</ProductId>
                                <ProductType><b>Type: </b>{foodlist.type}</ProductType>
                            </Details>
                            <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount></ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ {foodlist.price}</ProductPrice>
                        </PriceDetail>
                        </ProductDetail>
                            ))
                        }
                    </Product>
                    <Hr></Hr>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice></SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                    <SummaryItemText type="total">Total</SummaryItemText>
                    <SummaryItemPrice></SummaryItemPrice>
                    </SummaryItem>
                    <Button>Checkout Now</Button>
                </Summary>
               </Bottom>
            </Wrapper>
            </Container>
      );

}
export default Cart;