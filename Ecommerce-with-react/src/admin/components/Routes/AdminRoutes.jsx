import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Dashboard/Layout";
import Navbar from "../Dashboard/Navbar";
import AdminHome from "../../pages/AdminHome";
import AdminOrders from "../../pages/AdminOrders";
import AdminAddProduct from "../../pages/AdminAddProduct";
import AdminProductsPage from "./../../pages/AdminProductsPage";
const AdminRoutes = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const openDrawerHandler = (toggle) => {
    setOpenDrawer(toggle);
  };
  return (
    <>
      <Navbar onOpen={openDrawerHandler} />
      <Layout open={openDrawer}>
        <Routes>
          <Route path="/" element={<AdminHome />} />

          <Route path="/products" element={<AdminProductsPage />} />
          <Route path="/orders" element={<AdminOrders />} />
          <Route path="/add-product" element={<AdminAddProduct />} />
        </Routes>
      </Layout>
    </>
  );
};

export default AdminRoutes;
