import React from "react";
import { Form, Row, Col, Container, Breadcrumb } from "react-bootstrap";
import { BsGeoAlt, BsPhone, BsClock } from "react-icons/bs";
import styles from "./Contact.module.css";
import Logo from "../../Assets/Meubel House_Logos-05.png";
export default function Contact() {
  return (
    <>
      <Container fluid className={`${styles.banerContainer}`}>
        <Row>
          <Col md={12} className={`text-Center`}>
            <img src={Logo} alt="Meubel House_Logos-05" />
            <h1 className={`${styles.contactTitle}`}>Contact</h1>
            <Breadcrumb className={`${styles.breadcrumbNav}`}>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Contact</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
      <Container fluid className={`${styles.contactContainer} my-5`}>
        <Row>
          <h3>Get In Touch With Us</h3>
          <p>
            For more information about our product & services, please feel free
            to <br /> drop us an email. Our staff will always be there to help
            you out. Do not hesitate!
          </p>
          <Col md={6}>
            <div className={`${styles.contactDetails}`}>
              <div className={`${styles.contactItem}`}>
                <BsGeoAlt className="icon" />
                <div>
                  <h5>Address</h5>
                  <p>236 5th SE Avenue, New York, NY10000, United States</p>
                </div>
              </div>
              <div className={`${styles.contactItem}`}>
                <BsPhone className={`${styles.icon}`} />
                <div>
                  <h5>Phone</h5>
                  <p>
                    Mobile: +(84) 546-6789
                    <br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>
              <div className={`${styles.contactItem}`}>
                <BsClock className={`${styles.icon}`} />
                <div>
                  <h5>Working Time</h5>
                  <p>
                    Monday–Friday: 9:00 - 22:00
                    <br />
                    Saturday–Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Form className={`${styles.contactForm} `}>
              <Form.Group controlId="formName">
                <Form.Label className="my-2">Your name</Form.Label>
                <Form.Control className="my-2" type="text" placeholder="Abc" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="my-2">Email address</Form.Label>
                <Form.Control
                  className="my-2"
                  type="email"
                  placeholder="Abc@def.com"
                />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label className="my-2">Subject</Form.Label>
                <Form.Control
                  className="my-2 "
                  type="text"
                  placeholder="This is an optional"
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label className="my-2">Message</Form.Label>
                <Form.Control
                  className="my-2"
                  as="textarea"
                  rows={4}
                  placeholder="Hi! I’d like to ask about..."
                />
              </Form.Group>
              <button type="submit" className={`${styles.submitBtn}`}>
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
