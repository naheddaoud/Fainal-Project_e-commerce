import React from "react";
import styles from "./Shop.module.css";
import { Row, Col, Breadcrumb, Container } from "react-bootstrap";
import ProductFilterBar from "../ProductFilterBar/ProductFilterBar";
import CategoryProducts from "../CategoryProducts/CategoryProducts";
import Logo from '../../Assets/Meubel House_Logos-05.png';
export default function Shop() {
  return (
    <>
<Container fluid className={`${styles.banerContainer}`}>
      <Row>
        <Col md={12} className={`text-Center`}>
        <img src={Logo} alt="Meubel House_Logos-05"/>
          <h1 className={`${styles.checkoutTitle}`}>Shop</h1>
          <Breadcrumb className={`${styles.breadcrumbNav}`}>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Shop</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
      <div>
        <ProductFilterBar />
      </div>
      <Container fluid className={styles.shopContainer}>
        <CategoryProducts/>
      </Container>
    </>
  );
}
