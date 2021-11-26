import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";
import "./AdminPage.css";
import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar";
import AdminSwichCategory from "../../Components/AdminSwichCategory/AdminSwichCategory";

const AdminPage = () => {
  const [adminPageSelectedCategory, setAdminPageSeletedCategory] =
    useState("dashboard");
  const handleCategory = (string) => {
    setAdminPageSeletedCategory(string);
  };

  return (
    <div>
      <HeaderMenu />
      <Container>
        <Row>
          <Col lg={2}>
            <AdminSidebar
              handleCategory={handleCategory}
              adminPageSelectedCategory={adminPageSelectedCategory}
            ></AdminSidebar>
          </Col>
          <Col lg={10}>
            <AdminSwichCategory
              category={adminPageSelectedCategory}
            ></AdminSwichCategory>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminPage;
