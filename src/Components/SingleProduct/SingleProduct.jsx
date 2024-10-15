import React from "react";
import styles from "./SingleProduct.module.css";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Breadcrumb, Container, Nav } from "react-bootstrap";
import Maskgroup_1 from "../../Assets/Mask group _1.png";
import Maskgroup_2 from "../../Assets/Mask group_2.png";

export default function SingleProduct() {
  return (
    <>
      <Container className={styles.banerContainer }>

          <Breadcrumb className={`${styles.breadcrumbNav}`}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="shop">Shop</Breadcrumb.Item>
          <Breadcrumb.Item active>Single Product</Breadcrumb.Item>
          </Breadcrumb>

      </Container>
      <div>
        <ProductDetails />
      </div>
      <hr style={{ border: "1px solid #ccc", margin: "20px 0" }} />
      <Container fluid className={styles.descriptionSection}>
        <Nav className="justify-content-center" activeKey="">
          <Nav.Item>
            <Nav.Link eventKey="Description">Description</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled">Additional Information</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled">Reviews [5]</Nav.Link>
          </Nav.Item>
        </Nav>
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and
          <br />
          sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          <br />
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange
          <br />
          and extended highs for a sound that is both articulate and pronounced.
          The analogue knobs allow you to fine tune the controls
          <br />
          to your personal preferences while the guitar-influenced leather strap
          enables easy and stylish travel.
        </p>
        <div className={`col-lg-6 col-md-6 col-sm-12 mt-4`}>
          <img src={Maskgroup_1} alt="Maskgroup_1" />
          <img src={Maskgroup_2} alt="Maskgroup_2" />
        </div>
      </Container>
    </>
  );
}
