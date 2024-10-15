import React from "react";
import { Form, Button, Row, Col, Breadcrumb, Container } from "react-bootstrap";
import { BsBank, BsTruck } from "react-icons/bs";
import styles from "./CheckOut.module.css";
import Logo from "../../Assets/Meubel House_Logos-05.png";

export default function CheckOut() {
  return (
        <><Container fluid className={`${styles.banerContainer}`}>
      <Row>
        <Col md={12} className={`text-Center`}>
          <img src={Logo} alt="Meubel House_Logos-05" />
          <h1 className={`${styles.checkoutTitle}`}>Checkout</h1>
          <Breadcrumb className={`${styles.breadcrumbNav}`}>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>CheckOut</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
    <Container className={`${styles.checkoutContainer}`}>
        <Row>
          <Col md={6}>
            <h3>Billing details</h3>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="companyName">
                <Form.Label>Company Name (Optional)</Form.Label>
                <Form.Control type="text" placeholder="Company Name" />
              </Form.Group>

              <Form.Group controlId="countryRegion">
                <Form.Label>Country / Region</Form.Label>
                <Form.Control as="select" defaultValue="Sri Lanka">
                  <option>Sri Lanka</option>
                  {/* Add other countries as needed */}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="streetAddress">
                <Form.Label>Street Address</Form.Label>
                <Form.Control type="text" placeholder="Street Address" />
              </Form.Group>

              <Form.Group controlId="city">
                <Form.Label>Town / City</Form.Label>
                <Form.Control type="text" placeholder="Town / City" />
              </Form.Group>

              <Form.Group controlId="province">
                <Form.Label>Province</Form.Label>
                <Form.Control as="select" defaultValue="Western Province">
                  <option>Western Province</option>
                  {/* Add other provinces as needed */}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="zipCode">
                <Form.Label>ZIP Code</Form.Label>
                <Form.Control type="text" placeholder="ZIP Code" />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone" />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="additionalInfo">
                <Form.Label>Additional information</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Additional information" />
              </Form.Group>
            </Form>
          </Col>

          <Col md={6}>
            <h3>Product</h3>
            <div className={`${styles.orderSummary}`}>
              <p>Asgaard sofa × 1</p>
              <p>Subtotal: Rs. 250,000.00</p>
              <h4>Total: Rs. 250,000.00</h4>

              <Form>
                <Form.Check
                  type="radio"
                  label={<>
                    <BsBank /> Direct Bank Transfer
                  </>}
                  name="paymentMethod"
                  id="bankTransfer" />
                <p className={`${styles.paymentInfo}`}>
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference.
                </p>
                <Form.Check
                  type="radio"
                  label={<>
                    <BsTruck /> Cash On Delivery
                  </>}
                  name="paymentMethod"
                  id="cashOnDelivery" />
              </Form>

              <Button variant="primary" className={`${styles.placeOrderBtn}`}>
                Place order
              </Button>
            </div>
          </Col>
        </Row>
      </Container></>
  );
}
