import React, { useState } from 'react';
import productsData from '../../assets/productsData';
import { MoveRight, Star } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState(productsData);
    const [isFilterApplied, setIsFilterApplied] = useState(false);

    const topProducts = productsData.slice(0, 11)
    const navigate = useNavigate();



    const allProduct = productsData.slice(0, 11)
    const headphoneProduct = productsData.filter(product => product.category == 'Headphones')
    const earbudsProduct = productsData.filter(product => product.category == 'Earbuds')
    const earphonePriceProduct = productsData.filter(product => product.category == 'Earphones');
    const neckbandPriceProduct = productsData.filter(product => product.category == 'Neckbands');

    const toggleCategoryFilter = (filter) => {
        setProducts(filter);
        setIsFilterApplied(true)
    }

    // Printing stars based on the rateCOunt
    const printStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<i key={i} className="fa-solid fa-star"></i>);
        }
        return stars;
    }

    const browseProducts = () => {
        navigate('/products')
    }

    return (
        <div className='topproducts'>
            <h2>Top Products</h2>
            <section className='topproducts-1' id='topproducts-1'>

                <button onClick={() => toggleCategoryFilter(allProduct)}>All</button>
                <button onClick={() => toggleCategoryFilter(headphoneProduct)}>Headphones</button>
                <button onClick={() => toggleCategoryFilter(earbudsProduct)}>Earbuds</button>
                <button onClick={() => toggleCategoryFilter(earphonePriceProduct)}>Earphones</button>
                <button onClick={() => toggleCategoryFilter(neckbandPriceProduct)}>Neckbands</button>
            </section>
            <div className='topproducts-2'>
                {products.map(product => (
                    <div key={product.id}>
                        <Link to={`/products/product-details/${encodeURIComponent(product.title)}`}>
                            <div className='image-container'>
                                <img src={"src/Assets" + product.images[0]} alt={product.title} />
                            </div>
                        </Link>
                        <section className='product-details'>
                            <Link to={`/products/product-details/${encodeURIComponent(product.title)}`} className='product-style'>
                                <div>
                                    {printStars(product.rateCount)}
                                </div>
                                <h6>{product.title}</h6>
                                <p>{product.info}</p>
                                <hr />
                                <div className='price-tag'>
                                    <p>&#8377;{product.finalPrice} <span className='original'>&#8377;{product.originalPrice}</span></p>
                                </div>
                            </Link>
                            <button className='add-to-cart-btn'>Add to Cart</button>
                        </section>
                    </div>
                ))
                }
                <div className='browse' onClick={browseProducts}>
                    <p>Browse All Products <MoveRight /></p>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Products;
