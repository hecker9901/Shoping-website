import { Routes, Route } from "react-router-dom";
import HomePage from "./../pages/HomePage";
import ProductPage from "./../pages/ProductPage";
import CartPage from "./../pages/CartPage";
import ProductDetailPage from "./../pages/ProductDetailPage";
import CheckoutPage from "./../pages/CheckoutPage";
import OrderHistoryPage from "./../pages/OrderHistoryPage";
import OrderSummaryPage from "./../pages/OrderSummaryPage";
import LoginPage from "./../pages/LoginPage";
import SignupPage from "./../pages/SignupPage";
import Layout from "../components/Layout/Layout";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage";
import ProtectedRoutes from "./ProtectedRoutes";
const CustomerRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* 
           Protected Routes          */}
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/:levelOne/:levelTwo/:levelThree"
            element={<ProductPage />}
          />

          <Route path="/product/:productId" element={<ProductDetailPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/checkout" element={<CheckoutPage />} />
          {/*    For User Account  */}
          <Route path="/account/order" element={<OrderHistoryPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          {/* 
        
          <Route
            path="/account/order/:orderId"
            element={<OrderSummaryPage />}
          /> */}
        </Route>
      </Routes>
    </Layout>
  );
};

export default CustomerRoutes;
