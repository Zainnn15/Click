import React, { useState, useEffect } from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const count = useSelector((state) => state.cart.cart);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data !== null) setUserName(data.userName);
  }, []);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
          {" "}
          </Logo>{" "}
          <MenuItem onClick={() => navigate("/")} tyle={{ textDecoration: "none " }}> CLICK</MenuItem>
        </Center>
        <Right>
          <MenuItem onClick={() => navigate("/Products")}> PRODUCTS</MenuItem>
          <MenuItem onClick={() => navigate("/Deals")}> DEALS</MenuItem>
          <MenuItem onClick={() => navigate("/")}>{userName || "SIGN IN"}</MenuItem>
          {/*If username is logged in, add signout button */
          userName && (
            <MenuItem onClick={() => navigate("/Home")}>SIGN OUT</MenuItem>
          )
               
          
          }
          <MenuItem onClick={() => navigate("/Cart")}>
            <Badge badgeContent={count.length} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
