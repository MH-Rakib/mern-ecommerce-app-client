import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { FaTelegramPlane } from "react-icons/fa";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className=" newsletter">
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <div className="newsletter-form">
              <h3 className="heading">Newsletter</h3>
              <p>Get timely updates from Your favourite products</p>
              <InputGroup className="mb-3 ">
                <FormControl
                  placeholder="Your Email"
                  className="newsletter-inputfield"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button
                  className="newsletter-button"
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  <FaTelegramPlane className="newsletter-button-icon" />
                </Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
