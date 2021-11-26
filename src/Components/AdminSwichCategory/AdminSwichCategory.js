import React from "react";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import AdminOrderData from "../AdminOrderData/AdminOrderData";
import AdminProducts from "../AdminProducts/AdminProducts";
import AdminUserData from "../AdminUserData/AdminUserData";

const AdminSwichCategory = ({ category }) => {
  return (
    <div>
      {category === "dashboard" && <AdminDashboard />}
      {category === "products" && <AdminProducts />}
      {category === "orders" && <AdminOrderData />}
      {category === "users" && <AdminUserData />}
    </div>
  );
};

export default AdminSwichCategory;
