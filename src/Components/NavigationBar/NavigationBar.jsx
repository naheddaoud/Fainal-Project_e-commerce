import React from "react";
import styles from "./NavigationBar.module.css";
import logo from "../../Assets/Meubel House_Logos-05.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsPersonExclamation } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg" className="px-4 ">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className={styles.navbarBrand}>
          <img src={logo} alt="" className={styles.logo} />
          <span className={styles.navbarBrand}>Furniro</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop" className={styles.navLink}>
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/singleProduct" className={styles.navLink}>
              Single Product
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={styles.navLink}>
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/" className="mx-1">
              <BsPersonExclamation size={28} />
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="mx-1">
              <HiOutlineSearch size={28} />
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="mx-1">
              <HiOutlineHeart size={28} />
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="ms-1">
              <HiOutlineShoppingCart size={28} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
