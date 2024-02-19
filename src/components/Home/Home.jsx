import React from 'react';
import HeroSlider from '../Sliders/HeroSlider';
import FeaturedProducts from '../Sliders/FeaturedProducts';
import Products from './HomeProducts';
import Advantages from './Advantages';

const Home = () => {
    return (
        <div>
            <HeroSlider />
            <FeaturedProducts />
            <Products />
            <Advantages />
        </div>
    );
}

export default Home;