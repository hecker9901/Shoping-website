import AdminRoutes from "./admin/components/Routes/AdminRoutes";
import "./App.css";
import Layout from "./customer/components/Layout/Layout";

import CustomerRoutes from "./customer/Routes/CustomerRoutes";
import { Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
function App() {
  const { user } = useSelector((state) => state.auth);

  // if (!user && !isAuth) {
  //   return redirect("/");
  // }
  return (
    <>
  
        <Routes>
          {/*  For Customers Only */}
          <Route path="/*" element={<CustomerRoutes />} />
          {user?.user?.role === "ADMIN" && (
            <Route path="/admin/*" element={<AdminRoutes />} />
          )}
          {user?.user?.role !== "ADMIN" && (
            <Route path="/admin/*" element={<Navigate to="/" />} />
          )}
        </Routes>
   
    </>
  );
}

export default App;
