import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NavbarOut from "../components/NavbarOut";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
const Home = () => {
  return (
    <div>
      <Announcement />
      <NavbarOut />
      <Slider />
      <Categories />
      {/* <Products /> */}
    </div>
  );
};

export default Home;
