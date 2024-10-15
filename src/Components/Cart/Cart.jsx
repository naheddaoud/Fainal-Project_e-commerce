// import React from "react";
// import styles from "./Cart.module.css";
// import { Row, Col, Button, Form, Stack } from "react-bootstrap";
// import { BsTrash } from "react-icons/bs";
// import { useState, useEffect, useContext } from 'react';
// import { CartContext } from '../../Context/CartContext';
// import _ from 'lodash'; // to use it in syncronization cart
// import { Oval } from "react-loader-spinner";

// export default function Cart() {
//   let [products, setProducts] = useState(null);
//   let [loading, setLoading] = useState(true);
//   let { getCartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);

//   async function getItems() {
//     // Function to get items of the cart
//     let { data } = await getCartItems();
//     console.log(data);
//     setProducts(data);
//     setLoading(false);
//   }

//   // ------------------------------------------------------------------------------------------------------------------------------
//   // Function to update total cart price and num of items (as total quantity)
//   function updateCartDetails(updatedProducts) {
//     const numOfCartItems = updatedProducts.reduce((acc, product) => acc + product.count, 0);
//     const totalCartPrice = updatedProducts.reduce((acc, product) => acc + (product.count * product.price), 0);

//     setProducts(prev => ({
//       ...prev,
//       data: {
//         ...prev.data,
//         products: updatedProducts,
//         numOfCartItems: numOfCartItems,
//         totalCartPrice: totalCartPrice,
//       }
//     }));
//   }

//   // Function to remove item from the cart
//   async function handleRemove(productId) {
//     const updatedProducts = products.data.products.filter(product => product.product.id !== productId);

//     // Update state after removing the item
//     updateCartDetails(updatedProducts);

//     await removeFromCart(productId);
//   }

//   // Function to handle debounced update for quantity changes
//   const debouncedUpdateQuantity = _.debounce(async (productId, newQuantity) => {
//     await updateCartItemQuantity(productId, newQuantity);
//   }, 500); // sync after half second

//   // Function to increase item count
//   function handleIncrease(productId, currentCount) {
//     const updatedProducts = products.data.products.map(product => {
//       if (product.product.id === productId) {
//         return { ...product, count: currentCount + 1 };
//       }
//       return product;
//     });

//     // Update state and cart details
//     updateCartDetails(updatedProducts);

//     // Debounced update
//     debouncedUpdateQuantity(productId, currentCount + 1);
//   }

//   // Function to decrease item count
//   function handleDecrease(productId, currentCount) {
//     if (currentCount > 1) {
//       const updatedProducts = products.data.products.map(product => {
//         if (product.product.id === productId) {
//           return { ...product, count: currentCount - 1 };
//         }
//         return product;
//       });

//       // Update state and cart details "sync" //
//       updateCartDetails(updatedProducts);

//       // Debounced update "sync" //
//       debouncedUpdateQuantity(productId, currentCount - 1);
//     }
//   }
//   // ------------------------------------------------------------------------------------------------------------------------------

//   useEffect(() => {
//     getItems();
//   }, []);

//   return (
//     <div className={styles.cartContainer}>
//       {loading ? (
//         <div className={styles.loaderContainer}>
//           <Oval height={80} width={80} color="#4fa94d" visible={true} />
//         </div>
//       ) : (
//         <>
//           <Col md={8}>
//             <Stack
//               direction="horizontal"
//               className={`${styles.cartHeader} p-2`}
//             >
//               <div className={`${styles.header} p-5`}>Product</div>
//               <div className={`${styles.header} p-5 ms-auto`}>Price</div>
//               <div className={`${styles.header} p-5`}>Quantity</div>
//               <div className={`${styles.header} p-5 me-3`}>Subtotal</div>
//               <div className={`${styles.header} p-4`}></div>
//             </Stack>
//           </Col>
//           {products.data.products.map((product) => (
//           <Stack key={product.product.id} direction="horizontal" className={`${styles.cartItem} p-5`}>
//             <Col md={3} className={`${styles.productInfo}`}>
//               <img
//                 src={product.product.image}
//                 alt={product.product.title}
//                 className={`${styles.productImage}`}
//               />
//               <span>
//                 {product.product.title.split(" ").splice(0, 3).join(" ")}
//               </span>
//             </Col>
//             <Col md={1} className={`${styles.productPrice}`}>
//               {product.price} EGP
//             </Col>
//             <Col md={1} className={`${styles.productQuantity} ps-5`}>
//               <Form.Control type="number" placeholder={product.count} />
//             </Col>
//             <Col md={1} className={`${styles.productSubtotal} ps-5 ms-5`}>
//               Rs. 250,000
//             </Col>
//             <Col md={1} className={`${styles.productRemove}`}>
//               <Button variant="link" className={`${styles.removeBtn}`}>
//                 <BsTrash />
//               </Button>
//             </Col>
//           </Stack>
//                   ))};
//           <Row
//             className={`${styles.cartTotals} justify-content-left text-left`}
//           >
//             <Col sm={12} className={`${styles.totalsBox} my-5`}>
//               <h5>Cart Totals</h5>
//               <div className={styles.totalsInfo}>
//                 <Row className={`${styles.totalsRow} px-5 mt-5`}>
//                   <p>
//                     Subtotal{" "}
//                     <span className={styles.subtotal}>Rs. 250,000.00</span>
//                   </p>
//                 </Row>
//                 <Row className={`${styles.totalsRow} px-5`}>
//                   <p>
//                     Total
//                     <span className={styles.totalAmount}>Rs. 250,000.00</span>
//                   </p>
//                 </Row>
//               </div>
//               <button className={styles.checkoutBtn}>Check Out</button>
//             </Col>
//           </Row>

//         </>
//       )}
//     </div>
//   );
// }
// -------------End of Code with Functionality and comment it to not cart available in Fake API----------------------------------

import React from "react";
import styles from "./Cart.module.css";
import {
  Row,
  Col,
  Button,
  Form,
  Stack,
  Container,
  Breadcrumb,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import productcart from "../../Assets/productcart.png";
import Logo from "../../Assets/Meubel House_Logos-05.png";
import LiviningRoomCouch  from "../../Assets/image 4.png";
export default function Cart() {
  let products = [
    {
      product: {
        id: 1,
        title: "Asgaard sofa",
        image: productcart ,
      },
      price: 2500,
      count: 1,
    },

    {
      product: {
        id: 2,
        title: "Livining-room-couch",
        image: LiviningRoomCouch,
      },
      price: 40000,
      count: 1,
    },
  ];

  return (
    <>
      <Container fluid className={`${styles.banerContainer}`}>
        <Row>
          <Col md={12} className={`text-Center`}>
            <img src={Logo} alt="Meubel House_Logos-05" />
            <h1 className={`${styles.cartTitle}`}>Cart</h1>
            <Breadcrumb className={`${styles.breadcrumbNav}`}>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Cart</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
      <Container className={styles.cartContainer}>
        <Col md={8}>
          <Stack direction="horizontal" className={`${styles.cartHeader} p-2`}>
            <div className={`${styles.header} p-5`}>Product</div>
            <div className={`${styles.header} p-5 ms-auto`}>Price</div>
            <div className={`${styles.header} p-5`}>Quantity</div>
            <div className={`${styles.header} p-5 me-3`}>Subtotal</div>
            <div className={`${styles.header} p-4`}></div>
          </Stack>
        </Col>

        {products.map((product) => (
          <Stack
            key={product.product.id}
            direction="horizontal"
            className={`${styles.cartItem} p-5`}
          >
            <Col md={3} className={`${styles.productInfo}`}>
              <img
                src={product.product.image}
                alt={product.product.title}
                className={`${styles.productImage}`}
              />
              <span>
                {product.product.title.split(" ").splice(0, 3).join(" ")}
              </span>
            </Col>
            <Col md={1} className={`${styles.productPrice}`}>
              {product.price} EGP
            </Col>
            <Col md={1} className={`${styles.productQuantity} ps-5`}>
              <Form.Control type="number" placeholder={product.count} />
            </Col>
            <Col md={1} className={`${styles.productSubtotal} ps-5 ms-5`}>
              Rs. 250,000
            </Col>
            <Col md={1} className={`${styles.productRemove}`}>
              <button variant="link" className={`${styles.removeBtn}`}>
                <BsTrash />
              </button>
            </Col>
          </Stack>
        ))}

        <Row className={`${styles.cartTotals} justify-content-left text-left`}>
          <Col sm={12} className={`${styles.totalsBox} my-5`}>
            <h5>Cart Totals</h5>
            <div className={styles.totalsInfo}>
              <Row className={`${styles.totalsRow} px-5 mt-5`}>
                <p>
                  Subtotal{" "}
                  <span className={styles.subtotal}>Rs. 250,000.00</span>
                </p>
              </Row>
              <Row className={`${styles.totalsRow} px-5`}>
                <p>
                  Total
                  <span className={styles.totalAmount}>Rs. 250,000.00</span>
                </p>
              </Row>
            </div>
            <Link to="/CheckOut" className={styles.checkoutBtn}>
              Check Out
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
