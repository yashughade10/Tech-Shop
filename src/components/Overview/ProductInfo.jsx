import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../assets/productsData';
import Overview from './Overview';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Action/Action';

const ProductInfo = () => {
    const { productInfo } = useParams();

    // Find the product with matching info
    const product = productsData.find(product => product.title === decodeURIComponent(productInfo));

    // Images rendering 
    const showImages = (index) => {
        document.getElementById('product-imgs').src = `/src/assets/${product.images[index]}`;
    }

    // Printing stars based on the rateCOunt
    const printStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<i key={i} className="fa-solid fa-star"></i>);
        }
        return stars;
    }


    // Calculating the discount
    function discount(finalPrice, originalPrice) {
        let discount = originalPrice - finalPrice
        let discountPercentage = (discount / originalPrice) * 100

        return discount, discountPercentage.toFixed(2)
    }


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

    return (
        <>
            {product && (
                <div className="productsinfo" key={product.id}>
                    <section className="productsinfo-1">
                        {product.images.map((image, index) => (
                            <img
                                onClick={() => showImages(index)}
                                src={`/src/assets/${image}`}
                                alt="product-image"
                                key={index}
                                className='product-image-iteration'
                            />
                        ))}
                    </section>
                    <section>
                        <img id='product-imgs' src={`/src/assets/${product.images[0]}`} alt="" />
                    </section>
                    <section className="productsinfo-3">
                        <h6>{product.title}</h6>
                        <p className='pro-info'>{product.info}</p>
                        <p className='rating-reviews-no'>{printStars(product.rateCount)} | <span>{product.ratings} Ratings</span></p>
                        <hr />
                        <div className='price-content'>
                            <section className='price-related-content'>
                                <h6>&#8377;{product.finalPrice} <del>&#8377;{product.originalPrice}</del></h6>
                                <p className='discount-calculated'>You save: &#8377;{product.originalPrice-product.finalPrice} ({discount(product.finalPrice, product.originalPrice)} %)</p>
                                <p className='product-taxes'>(Inclusive of all Taxes)</p>
                            </section>
                            <section>
                                <button>&#x2714; In Stock</button>
                            </section>
                        </div>
                        <hr />
                        <p className='product-offers-discount'>Offers and Discounts</p>
                        <div className='creditcard-emi'>
                            <p className="border">No Cost EMI on credit card</p>
                            <p className="border">Pay Later and Avail Cashback</p>
                        </div>
                        <hr />
                        <button id="cart" onClick={()=> addtocartitem(product)} >Add to Cart</button>
                    </section>
                </div>
            )}

            <Overview product={product} />
        </>
    );
}

export default ProductInfo;
