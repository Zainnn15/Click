import styled from "styled-components";
import Product from "./Product";
import Cart from "./Product";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useGetProductsMutation } from "../api/products";
import ProductCard from "./Cards";
import { Grid } from "@material-ui/core";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const Products = ({ hasDiscount }) => {
  const [queryCategory, setQueryCategory] = useState("all");
  const [queryPrice, setQueryPrice] = useState("asc");
  const [products, setProducts] = useState([]);
  const [data, { isLoading }] = useGetProductsMutation();

  useEffect(() => {
    data(`?category=${queryCategory}&&price=${queryPrice}`).then((res) => {
      if (res.error) return alert(res.error.data);
      setProducts(res.data);
    });
  }, [queryCategory, queryPrice]);
  return (
    <>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={(e) => setQueryCategory(e.target.value)}>
            <Option disabled selected value="all">
              Categories
            </Option>
            <Option value="drink">Drink</Option>
            <Option value="dairy">Dairy</Option>
            <Option value="meat">Meat</Option>
            <Option value="wheat">Wheat</Option>
            <Option value="snacks">Snacks</Option>
            <Option value="veggies">Veggies</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setQueryPrice(e.target.value)}>
            <Option selected>Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Container>
        {isLoading ? (
          <p>Loading....</p>
        ) : products.length === 0 ? (
          <p>No Products</p>
        ) : (
          <Grid container spacing={2}>
            {products.map((item) => (
              <Grid xs={12} sm={12} md={4} key={item._id} style={{marginTop:10}}>
                <ProductCard item={item} hasDiscount={hasDiscount} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Products;
