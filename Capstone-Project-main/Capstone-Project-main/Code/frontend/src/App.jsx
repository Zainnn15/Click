import Product from "./components/Product";
import Home from "./pages/Home";
import HomeOut from "./pages/HomeOut";
import Coming_soon from "./pages/coming_soon";
import SignIn from "./pages/Sign-in";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Home" element={<HomeOut />} />
        <Route exact path="/Products" element={<ProductList />} />
        <Route exact path="/Products/:id" element={<ProductDetail />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Deals" element={<ProductList />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
