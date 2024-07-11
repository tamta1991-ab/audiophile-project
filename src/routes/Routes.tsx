import { Route, Routes , } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/product";
import Checkout from "../pages/checkout/Checkout";
import Notfound from "../pages/404/404";
import Layout from "../Layout/Layout";

const RoutesComponent = () => {
  return (
    
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Notfound />} />

        <Route path="/products/:productName" element={<Products />} />
        <Route path="/products/:productName/:productId" element={<Product />} />


      </Route>
    </Routes>
    
  );
};

export default RoutesComponent;