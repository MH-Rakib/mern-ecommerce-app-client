import React from "react";
import "./AdminSidebar.css";
import { FaArrowRight } from "react-icons/fa";

const AdminSidebar = ({ handleCategory, adminPageSelectedCategory }) => {
  return (
    <div>
      <div className="adminpage-sidebar-category">
        <h2 onClick={() => handleCategory("dashboard")}>Dashboard </h2>
        {adminPageSelectedCategory === "dashboard" && (
          <FaArrowRight
            style={{
              fontSize: "24px",
              marginTop: "0px",
              marginLeft: "10px",
              lineHeight: "24px",
            }}
          />
        )}
      </div>
      <div className="adminpage-sidebar-category">
        <h2 onClick={() => handleCategory("products")}>Products</h2>
        {adminPageSelectedCategory === "products" && (
          <FaArrowRight
            style={{
              fontSize: "24px",
              marginTop: "0px",
              marginLeft: "10px",
              lineHeight: "24px",
            }}
          />
        )}
      </div>
      <div className="adminpage-sidebar-category">
        <h2 onClick={() => handleCategory("users")}>Users</h2>
        {adminPageSelectedCategory === "users" && (
          <FaArrowRight
            style={{
              fontSize: "24px",
              marginTop: "0px",
              marginLeft: "10px",
              lineHeight: "24px",
            }}
          />
        )}
      </div>
      <div className="adminpage-sidebar-category">
        <h2 onClick={() => handleCategory("orders")}>Orders</h2>
        {adminPageSelectedCategory === "orders" && (
          <FaArrowRight
            style={{
              fontSize: "24px",
              marginTop: "0px",
              marginLeft: "10px",
              lineHeight: "24px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;
