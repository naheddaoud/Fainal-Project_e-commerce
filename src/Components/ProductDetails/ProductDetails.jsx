import React, { useEffect, useState, useContext } from "react";
import styles from "./ProductDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import toast from "react-hot-toast/headless";
import { CartContext } from "../../Context/CartContext";

export default function ProductDetails() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  // Fetch all product details from the API
  async function fetchProductDetails() {
    try {
      let { data } = await axios.get(`https://api.escuelajs.co/api/v1/products`);
      if (Array.isArray(data) && data.length > 0) {
        setProducts(data); // Save all products
        console.log(data); // Log all products to the console
      } else {
        console.error("Can't find any product.");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(false);
    }
  }

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // Slider settings
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Add to cart function
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

  return (
    <>
      {loading ? (
        <div className={styles.loaderContainer}>
          <Oval height={80} width={80} color="#4fa94d" visible={true} />
        </div>
      ) : (
        <div className="row align-items-center mt-2">
          {products.map((product, index) => (
            <div key={index} className="col-md-4">
              <Slider {...settings}>
                {product.images && product.images.length > 0 ? (
                  product.images.map((image, idx) => (
                    <img key={idx} className={styles.img} src={image} alt={`Product image ${idx}`} />
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </Slider>
              <div className="details">
                <h3 className="h5 fw-bold">{product.title}</h3>
                <p className="text-dark">
                  Description: <span className="text-primary">{truncateText(product.description, 25)}</span>
                </p>
                <span className="text-main">
                  Category:{" "}
                  <span className=".text-main-light">{product.category?.name}</span>
                </span>
                <div className="d-flex py-3 justify-content-between align-items-center">
                  <span className="font-sm text-main fw-bold">
                    {product.price} EGP
                  </span>
                </div>
              </div>
              <Link
                to="/cart"
                className={styles}
                onClick={() => postToCart(product.id)}
              >
                Add to Cart <FaShoppingCart />
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
