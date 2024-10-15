// Start Footer //
import React from "react";
import { Container, Row, Col, Form, Nav } from "react-bootstrap";
import styles from "./Footer.module.css";
import shipping from "../../Assets/shipping.png";
import Vector from "../../Assets/Vector.png";
import guarantee from "../../Assets/guarantee.png";
import Group from "../../Assets/Group.png";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container fluid className={styles.qualityBarContainer}>
        <Row className="justify-content-between align-items-center align-content-center">
          {/* Quality */}
          <Col
            lg={3}
            md={6}
            sm={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="m-2">
              <img src={Group} alt="High Quality Icon" />
            </div>
            <div className="text-left">
              <h6 className="mb-1">High Quality</h6>
              <p className="text-muted mb-0">Crafted from top materials</p>
            </div>
          </Col>

          {/* Warranty Protection */}
          <Col
            lg={3}
            md={6}
            sm={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="m-2">
              <img src={guarantee} alt="Warranty Protection Icon" />
            </div>
            <div className="text-left">
              <h6 className="mb-1">Warranty Protection</h6>
              <p className="text-muted mb-0">Over 2 years</p>
            </div>
          </Col>

          {/* Free Shipping */}
          <Col
            lg={3}
            md={6}
            sm={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="m-2">
              <img src={shipping} alt="Free Shipping Icon" />
            </div>
            <div className="text-left">
              <h6 className="mb-1">Free Shipping</h6>
              <p className="text-muted mb-0">Order over $150</p>
            </div>
          </Col>

          {/* 24/7 Support */}
          <Col
            lg={3}
            md={6}
            sm={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="m-2">
              <img src={Vector} alt="24/7 Support Icon" />
            </div>
            <div>
              <h6 className="mb-1">24/7 Support</h6>
              <p className="text-muted mb-0">Dedicated support</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className={`${styles.funiroContainer} px-4 py-5`}>
        <Row className={`justify-content-between`}>
          <Col lg={4} sm={12} className={`justify-content-center py-2`}>
            <h5 className={styles.h5}>Funiro.</h5>
            <p className={`${styles.p} text-muted text-start`}>
              480 University Drive Suite 200 Coral
              <br />
              Gables,
              <br />
              FL 33134 USA
            </p>
          </Col>
          <Col
            lg={2}
            sm={12}
            className={`py-2`}
          >
            <h6 className={`${styles.h6} text-muted py-2 ms-3`}>Links</h6>
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link as={Link} to="/" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link as={Link} to="/shop" className={styles.navLink}>Shop</Nav.Link>
            <Nav.Link as={Link} to="/cart" className={styles.navLink}>Cart</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={styles.navLink}>Contact</Nav.Link>
            </Nav>
          </Col>
          <Col lg={2} sm={12}className={`py-2`}>
            <h6 className={`${styles.h6} text-muted py-2`}>Help</h6>
            <ul className={`${styles.ul} py-2`}>
              <li className={styles.li}>Payment Options</li>
              <li className={styles.li}>Returns</li>
              <li className={styles.li}>Privacy Policies</li>
            </ul>
          </Col>
          <Col lg={2} sm={12} className={`py-2`}>
            <h6 className={`${styles.h6} text-muted my-3`}>Newsletter</h6>
            <Form className={`justify-content-center`}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email Address"
                  className={`${styles.enterEmailBox} my-2`}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col
            lg={2}
            sm={12}
            className={`my-5 py-4`}
          >
            <a href="/" className={`${styles.a} my-2 text-center`}>
          SUBSCRIBE
        </a>
          </Col>
          <hr/>
          <p className={`text-start`}>2023 Funiro. All rights reserved</p>
        </Row>
      </Container>
    </footer>
  );
}
// End Footer //
