import React, { useEffect, useState } from "react";
import bannerImg1 from "../../Assets/Images/Banner/bannerProduct1.png";
import bannerImg2 from "../../Assets/Images/Banner/bannerProduct2.png";
import bannerImg3 from "../../Assets/Images/Banner/bannerProduct3.png";
import { Row, Col, Container } from "react-bootstrap";
import { FaCaretRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./BannerSlider.css";

const imageArray = [bannerImg1, bannerImg2, bannerImg3];

const BannerSlider = () => {
  const [count, setCount] = useState(0);

  // Save timer ref and return cleanup function to clear it
  useEffect(() => {
    const timerId = setInterval(() => {
      // Use a functional state update to correctly increment the count
      setCount((count) => count + 1);
    }, 4000);

    return () => clearInterval(timerId);
  }, []);

  // `image` is derived state from the image array and current count
  // Take the count mod array length to get the correct computed index
  const image = imageArray[count % imageArray.length];

  return (
    <div className="bannerSlider section">
      <Container>
        <div className="slider-wrapper">
          <Row className="d-flex align-items-center">
            <Col lg={7} className="banner-image">
              <img src={image} className="w-100 img-fluid fade" alt="" />
            </Col>
            <Col lg={5} className="banner-text">
              <h2>Where your imagination come true</h2>

              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                porro neque odio, at aspernatur explicabo?{" "}
              </p>

              <button>
                Explore More <FaCaretRight className="banner-button-icon" />{" "}
              </button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BannerSlider;
