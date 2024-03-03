import React, { useState } from 'react';
import productsData from '../../../public/assets/productsData';
import { MoveRight, Star } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Action/Action';

const Products = () => {

    const [products, setProducts] = useState(productsData);
    const [isFilterApplied, setIsFilterApplied] = useState(false);
    const [activeTab, setActiveTab] = useState('specifications');

    const topProducts = productsData.slice(0, 11)
    const navigate = useNavigate();



    const allProduct = productsData.slice(0, 11)
    const headphoneProduct = productsData.filter(product => product.category == 'Headphones')
    const earbudsProduct = productsData.filter(product => product.category == 'Earbuds')
    const earphonePriceProduct = productsData.filter(product => product.category == 'Earphones');
    const neckbandPriceProduct = productsData.filter(product => product.category == 'Neckbands');

    const toggleCategoryFilter = (filter, category) => {
        setProducts(filter);
        setIsFilterApplied(true);
        setActiveTab(category)
    }

    // Printing stars based on the rateCOunt
    const printStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<i key={i} className="fa-solid fa-star"></i>);
        }
        return stars;
    }

    // limit the text
    const limitText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    // Add to cart
    let dispatch =useDispatch()

    function addtocartitem(product){
        dispatch(addtocart(product))
        const buttonId = `cart-style-${product.id}`;
        const button = document.getElementById(buttonId);
        if (button) {
            button.style.backgroundColor ="green";
            button.innerHTML = "Added";
        }
    }

    const browseProducts = () => {
        navigate('/products')
    }

    return (
        <div className='topproducts'>
            <h2>Top Products</h2>
            <section className='topproducts-1' id='topproducts-1'>

                <button onClick={() => toggleCategoryFilter(allProduct, "all")} style={{ backgroundColor: activeTab === 'all' ? 'red' : 'black' }}>All</button>
                <button onClick={() => toggleCategoryFilter(headphoneProduct, "Headphones")} style={{ backgroundColor: activeTab === 'Headphones' ? 'red' : 'black' }}>Headphones</button>
                <button onClick={() => toggleCategoryFilter(earbudsProduct, "Earbuds")} style={{ backgroundColor: activeTab === 'Earbuds' ? 'red' : 'black' }}>Earbuds</button>
                <button onClick={() => toggleCategoryFilter(earphonePriceProduct, "Earphones")} style={{ backgroundColor: activeTab === 'Earphones' ? 'red' : 'black' }}>Earphones</button>
                <button onClick={() => toggleCategoryFilter(neckbandPriceProduct, "Neckbands")} style={{ backgroundColor: activeTab === 'Neckbands' ? 'red' : 'black' }}>Neckbands</button>
            </section>
            <div className='topproducts-2'>
                {products.map(product => (
                    <div key={product.id}>
                        <Link to={`/products/product-details/${encodeURIComponent(product.title)}`}>
                            <div className='image-container'>
                                <img src={`/assets${product.images[0]}`} alt={product.title} />
                            </div>
                        </Link>
                        <section className='product-details'>
                            <Link to={`/products/product-details/${encodeURIComponent(product.title)}`} className='product-style'>
                                <div>
                                    {printStars(product.rateCount)}
                                </div>
                                <h6>{limitText(product.title, 19)}</h6>
                                <p>{limitText(product.info, 30)}</p>
                                <hr />
                                <div className='price-tag'>
                                    <p>&#8377;{product.finalPrice} <span className='original'>&#8377;{product.originalPrice}</span></p>
                                </div>
                            </Link>
                            <button className='add-to-cart-btn product-add-to-cart-btn' onClick={()=> addtocartitem(product)}>Add to Cart</button>
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
