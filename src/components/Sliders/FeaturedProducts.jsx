import React from 'react';
import Slider from "react-slick";
import productsData from '../../assets/productsData';
import { Link } from 'react-router-dom';

// Define custom arrow components
const PrevArrow = (props) => {
    const { onClick } = props;
    return <div className="custom-prev-arrow" onClick={onClick} />;
};

const NextArrow = (props) => {
    const { onClick } = props;
    return <div className="custom-next-arrow" onClick={onClick} />;
};

const FeaturedProducts = () => {

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "10px",
                },
            },
        ],
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };


    const featuredProduct = productsData.filter(product => product.tag).slice(0, 6)

    return (
        <>
            <h1 className='featured-products'>Featured Products</h1 >
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        featuredProduct.map(item => (
                            <div className="product-card" key={item.id}>
                                <Link to={`/products/product-details/${encodeURIComponent(item.title)}`} className='product-style'>
                                    <h3 className="product-name">{item.title}</h3>
                                    <img className="product-image" src={"src/Assets" + item.images[0]} alt="Product Image" />
                                    <p className="product-price">&#8377; {item.finalPrice} <del>&#8377;{item.originalPrice}</del></p>
                                </Link>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    );
}

export default FeaturedProducts;
