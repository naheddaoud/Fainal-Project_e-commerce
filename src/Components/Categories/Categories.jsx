import React, { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Categories.module.css";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCategories() {
    try {
      let { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/categories`
      );
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoading(false);
    }
  }

  // Slider Settins//
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className={styles.slickNext} onClick={onClick}>
        <span>›</span>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className={styles.slickPrev} onClick={onClick}>
        <span>‹</span>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container fluid className={styles.categoryContainer}>
      <h1>Browse The Range</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Oval height={80} width={80} color="#4fa94d" ariaLabel="loading" />
        </div>
      ) : (
        <Slider {...settings} className={`${styles.customSlider}`}>
          {categories.map((category) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={category.id}>
              <div className={`${styles.card}`}>
                <img variant="top" src={category.image} alt={category.name} />
                <a href={`/categoryproducts/${category.id}`}>{category.name}</a>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </Container>
  );
}
