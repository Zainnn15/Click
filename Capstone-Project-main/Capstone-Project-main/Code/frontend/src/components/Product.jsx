import React, { useState, useEffect } from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import Axios from "axios";
import { IconButton, Typography, Box } from "@material-ui/core";
import { addToCart } from "../store/cart";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item, hasDiscount }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setFoodname] = useState("");
  const [type, setTypename] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setimg] = useState("");
  const [_id, setid] = useState("");

  const [foodlist, setfoodlist] = useState([]);

  // const insertData= (title)=>{
  //   Axios.post(`http://localhost:3001/cart/${title}`);
  // }

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <Container>
      <Circle />

      <Image src={item.img} />
      <Box ml={3}>
        <Typography
          style={{
            fontFamily: "Outfit",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "36px",
            lineHeight: "110%",
            color: "#000000",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          style={{
            fontFamily: "Outfit",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            color: "#000000",
          }}
        >
          ${hasDiscount ? item.price - 10 : item.price}
        </Typography>
      </Box>

      <Info>
        <Icon>
          <IconButton onClick={() => handleAddToCart(item)}>
            <ShoppingCartOutlined />
          </IconButton>
        </Icon>
        <Icon>
          <IconButton onClick={() => navigate(`/Products/${item._id}`)}>
            <SearchOutlined />
          </IconButton>
        </Icon>
        <Icon>
          <IconButton>
            <FavoriteBorderOutlined />
          </IconButton>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
