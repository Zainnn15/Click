import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {categories.map((item) => (
          <Grid item xs={12} sm={12} md={4}>
            <CategoryItem item={item} key={item.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Categories;
