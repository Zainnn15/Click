import Product from "./components/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";

const App = () => {
  return (
  <Router>
      <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<ProductList />} />
      <Route path="/Cart" element={<Cart />} />
      </Routes>
   </Router>
  );
};

export default App;
