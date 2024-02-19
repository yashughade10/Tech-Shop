import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import productsData from '../../assets/productsData';

// Define custom arrow components
const PrevArrow = (props) => {
    const { onClick } = props;
    return <div className="custom-prev-arrow" onClick={onClick} />;
};

const NextArrow = (props) => {
    const { onClick } = props;
    return <div className="custom-next-arrow" onClick={onClick} />;
};

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };
    const heroSlider = productsData.filter(product => product.heroImage);
    return (
        <>
            <div className="slider-container" >
                <Slider {...settings} >
                    {
                        heroSlider.map(item => (
                            <div key={item.id}>
                                <div className="hero-banner">
                                    <p className="hero-text">{item.type}</p>
                                    <div className="content">
                                        <div className='card-content'>
                                            <h3>{item.title}</h3>
                                            <h2>{item.tagline}</h2>
                                            <p className='discounted-price'>&#8377;{item.finalPrice} <del className='original-price'>&#8377; {item.originalPrice}</del></p>
                                            <button className="button">Shop Now</button>
                                        </div>
                                        <div className="image-container-slider">
                                            <img className="image" src={"src/Assets" + item.images[0]} alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    );
}

export default HeroSlider;
