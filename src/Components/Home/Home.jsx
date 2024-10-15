import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "../Home/Home.module.css";
import Categories from "../Categories/Categories";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Rectangle36 from "../../Assets/Rectangle 36.png";
import Rectangle37 from "../../Assets/Rectangle 37.png";
import Rectangle38 from "../../Assets/Rectangle 38.png";
import Rectangle39 from "../../Assets/Rectangle 39.png";
import Rectangle40 from "../../Assets/Rectangle 40.png";
import Rectangle41 from "../../Assets/Rectangle 41.png";
import Rectangle43 from "../../Assets/Rectangle 43.png";
import Rectangle44 from "../../Assets/Rectangle 44.png";
import Rectangle45 from "../../Assets/Rectangle 45.png";
import Image_arrow from "../../Assets/Image_arrow.png";

export default function Home() {
  return (
    <>
      <div className={`container ${styles.bannerContainer}`}>
        <Row className="align-items-center p-0 m-0">
          <Col md={5}></Col>
          <Col md={4} className="ms-4">
            <div className={`${styles.bannerCard} `}>
              <div>
                <h5 className="">New Arrival</h5>
                <div className={styles.bannerTitle}>
                  Discover Our
                  <br />
                  New Collection
                </div>
                <div className={styles.bannerText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut{" "}
                  <br /> elit tellus, luctus nec ullamcorper mattis.
                </div>
                <br /> <br />
                <button className={styles.bannerButton}>BUY NOW</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Start Show Categories */}
      <div>
        <Categories />
      </div>
      {/*  End Show Categories  */}

      {/*  Start  Show All products */}
      <div>
        <FeaturedProducts />
      </div>
      {/*  End Show All products */}

      {/*  Start Show products */}
      <Container
        className={`fluid ${styles.productContaner} my-5 justify-content-between mx-auto`}
      >
        <Row>
          <Col md={4} className="m-5">
            <h1>
              50+ Beautiful rooms <br />
              inspiration
            </h1>
            <p>
              Our designer already made a lot of beautiful <br />
              prototipe of rooms that inspire you
            </p>
            <button className={styles.exploreButton}>Explore More</button>
          </Col>
          <Col md={4} className="mt--2">
            <img src={Image_arrow} alt="line arrow" />
          </Col>
          <Col md={3}>
            <Categories />
          </Col>
        </Row>
      </Container>
      {/*  End Show All products */}

      {/*  Start Show #FuniroFurniture */}
      <div className={`${styles.galleryContainer} my-5 pt-5`}>
        <Row className="justify-content-md-center">
          <p>Share yoursetup with</p>
          <span>#FuniroFurniture</span>
          <Col xs lg="1" className="align-items-end">
            <img src={Rectangle36} alt="Rectangle36" />
          </Col>
          <Col xs lg="2" className="align-items-end">
            <img src={Rectangle38} alt="Rectangle38" />
          </Col>
          <Col xs={5} className="align-items-center">
            <img src={Rectangle40} alt="Rectangle40" />
          </Col>
          <Col xs lg="2" className="align-items-end">
            <img src={Rectangle43} alt="Rectangle43" />
          </Col>
          <Col xs lg="2" className="align-items-end">
            <img src={Rectangle45} alt="Rectangle45" />
          </Col>
          <Col className="align-items-start">
            <img src={Rectangle37} alt="Rectangle37" />
          </Col>
          <Col xs lg="4" className="align-items-start">
            <img src={Rectangle39} alt="Rectangle39" />
          </Col>
          <Col xs lg="2" className="align-items-start">
            <img src={Rectangle41} alt="Rectangle41" />
          </Col>
          <Col xs lg="2" className="align-items-start">
            <img src={Rectangle44} alt="Rectangle44" />
          </Col>
        </Row>
      </div>
      {/*  End Show #FuniroFurniture */}
    </>
  );
}
