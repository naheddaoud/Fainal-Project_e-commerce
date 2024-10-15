import React, { useEffect, useState, useContext } from "react";
import styles from "./FeaturedProducts.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { CartContext } from "../../Context/CartContext";
import { Container, Image, Row } from "react-bootstrap";
import { FaShareAlt, FaExchangeAlt, FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast/headless";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(8); //to show initial products = 8 products

  // Get products from new API
  async function getProducts() {
    try {
      let { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products`
      );
      console.log(data);
      setProducts(data); // assuming 'data' is the list of products
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  // Function to show More 8 items in screen
  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 8);
  };

  // Function to add item to cart
  const { addToCart } = useContext(CartContext);
  async function postToCart(id) {
    try {
      const { data } = await addToCart(id);
      if (data.status === "success") {
        toast.success(data.message);
      } else {
        toast.error("Failed to add the product to the cart", {
          duration: 1000,
        });
      }
      console.log(data);
    } catch (error) {
      toast.error("Failed to add the product to the cart", { duration: 1000 });
    }
  }

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  // Function to hover product
  const [hoveredProductId, setHoveredProductId] = useState(false);

  // Function to click on product
  const [clickedProductId, setclickedProductId] = useState(false);

  return (
    <Container fluid className={styles.productsContainer}>
      <h1>Our Products</h1>
      {loading ? (
        <div className={styles.loaderContainer}>
          <Oval height={80} width={80} color="#4fa94d" visible={true} />
        </div>
      ) : (
        <div className="row gy-3 ">
          {products.slice(0, visibleProducts).map((product) => (
            <div
              className="col-lg-3 col-md-6 col-sm-10"
              key={product.id}
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
              onClick={() => setclickedProductId(product.id)}
            >
              <div className={`${styles.card}`}>
                <Link to={`/productdetails/${product.id}`}>
                  <Image
                    variant="top"
                    src={product.images[0]}
                    alt={product.title}
                  />
                </Link>
                {hoveredProductId === product.id && (
                  <div className={styles.hoverOverlay}>
                    <button
                      className={styles.addToCartBtn}
                      onClick={() => postToCart(product.id)}
                    >
                      Add to cart
                    </button>
                    <div className={styles.iconOptions}>
                      <FaShareAlt />
                      <span>Share</span>
                      <FaExchangeAlt />
                      <span>Compare</span>
                      <FaRegHeart />
                      <span>Like</span>
                    </div>
                  </div>
                )}
                {clickedProductId === product.id && (
                  <Link to={`/productdetails/${product.id}`}></Link>
                )}
                <div className={`${styles.cardBody}`}>
                  <p className={`${styles.productTitle}`}>
                    {truncateText(product.title, 15)}
                  </p>
                  <p className={`${styles.productDescription}`}>
                    {truncateText(product.description, 25)}
                  </p>
                  <Row>
                    <p className={`${styles.productPrice} me-5`}>
                      Rp{product.price}{" "}
                      {product.price && (
                        <span className={`${styles.originalPrice} ms-5`}>
                          Rp{product.price}
                        </span>
                      )}
                    </p>
                  </Row>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {visibleProducts < products.length && (
        <div className="text-center my-4 relative justify-content-center align-items-center text-align-center">
          <button className={`${styles.showMoreBtn}`} onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </Container>
  );
}
