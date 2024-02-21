// import productsData from '../../assets/productsData';

// function Productsinfo() {
//     const sampleProducts = productsData.slice(0, 1);

//     console.log(sampleProducts);

//     return (
//         <>
//             <div>
//                 {sampleProducts.map(product => (
//                     <div className="productsinfo" key={product.id}>
//                         <section className="productsinfo-1">
//                             <img src={"src/assets" + product.images[0]} alt="" />
//                             <img src={"src/assets" + product.images[0]} alt="" />
//                             <img src={"src/assets" + product.images[0]} alt="" />
//                             <img src={"src/assets" + product.images[0]} alt="" />
//                         </section>
//                         <section>
//                             <img src={"src/assets" + product.images[0]} alt="" />
//                         </section>
//                         <section className="productsinfo-3">
//                             <h6>{product.title}</h6>
//                             <p>{product.info}</p>
//                             <p>{product.rateCount} <span>{product.ratings}</span></p>
//                             <hr />
//                             <div>
//                                 <section>
//                                     <h6>{product.finalPrice} <span>{product.originalPrice}</span></h6>
//                                     <p>You save: discount</p>
//                                     <p>(Inclusive of all Taxes)</p>
//                                 </section>
//                                 <section>
//                                     <button>In: Stock</button>
//                                 </section>
//                             </div>
//                             <hr />
//                             <p>Offers and Discounts</p>
//                             <div>
//                                 <p className="border">No Cost EMI on credit card</p>
//                                 <p className="border">Pay Later and Avail Cashback</p>
//                             </div>
//                             <hr />
//                             <button id="cart">Add to Cart</button>
//                         </section>
//                     </div>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default Productsinfo;




// import React from 'react';
// import { useParams } from 'react-router-dom';
// import productsData from '../../assets/productsData';

// const ProductInfo = () => {
//     const { id } = useParams();

//     // Find the product with matching id
//     const product = productsData.find(product => product.id === parseInt(id));
//     console.log(product.images[0]);

//     return (
//         <>
//             {product && (
//                 <div className="productsinfo" key={product.id}>
//                     <section className="productsinfo-1">
//                         {product.images && product.images.map((image, index) => (
//                             <img src={"src/assets" + image} alt="product-image" key={index} />
//                         ))}
//                     </section>
//                     <section>
//                         <img src={"src/assets" + product.images[0]} alt="" />
//                     </section>
//                     <section className="productsinfo-3">
//                         <h6>{product.title}</h6>
//                         <p>{product.info}</p>
//                         <p>{product.rateCount} <span>{product.ratings}</span></p>
//                         <hr />
//                         <div>
//                             <section>
//                                 <h6>{product.finalPrice} <span>{product.originalPrice}</span></h6>
//                                 <p>You save: discount</p>
//                                 <p>(Inclusive of all Taxes)</p>
//                             </section>
//                             <section>
//                                 <button>In: Stock</button>
//                             </section>
//                         </div>
//                         <hr />
//                         <p>Offers and Discounts</p>
//                         <div>
//                             <p className="border">No Cost EMI on credit card</p>
//                             <p className="border">Pay Later and Avail Cashback</p>
//                         </div>
//                         <hr />
//                         <button id="cart">Add to Cart</button>
//                     </section>
//                 </div>
//             )}
//         </>
//     );
// }

// export default ProductInfo;




// import React from 'react';
// import { useParams } from 'react-router-dom';
// import productsData from '../../assets/productsData';

// const ProductInfo = () => {
//     const { id } = useParams();

//     // Find the product with matching id
//     const product = productsData.find(product => product.id === parseInt(id));

//     return (
//         <>
//             {product && (
//                 <div className="productsinfo" key={product.id}>
//                     <section className="productsinfo-1">
//                         {product.images.map((image, index) => (
//                             <img src={`/src/assets/${image}`} alt="product-image" key={index} />
//                         ))}
//                     </section>
//                     <section>
//                         <img src={`/src/assets/${product.images[0]}`} alt="" />
//                     </section>
//                     <section className="productsinfo-3">
//                         <h6>{product.title}</h6>
//                         <p>{product.info}</p>
//                         <p>{product.rateCount} <span>{product.ratings}</span></p>
//                         <hr />
//                         <div>
//                             <section>
//                                 <h6>{product.finalPrice} <span>{product.originalPrice}</span></h6>
//                                 <p>You save: discount</p>
//                                 <p>(Inclusive of all Taxes)</p>
//                             </section>
//                             <section>
//                                 <button>In: Stock</button>
//                             </section>
//                         </div>
//                         <hr />
//                         <p>Offers and Discounts</p>
//                         <div>
//                             <p className="border">No Cost EMI on credit card</p>
//                             <p className="border">Pay Later and Avail Cashback</p>
//                         </div>
//                         <hr />
//                         <button id="cart">Add to Cart</button>
//                     </section>
//                 </div>
//             )}
//         </>
//     );
// }

// export default ProductInfo;











import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../assets/productsData';
import Overview from './Overview';

const ProductInfo = () => {
    const { productInfo } = useParams(); // Use productInfo instead of id

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

        return discount , discountPercentage.toFixed(2) 
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
                                <p className='discount-calculated'>You save: ({discount(product.finalPrice, product.originalPrice)} %)</p>
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
                        <button id="cart">Add to Cart</button>
                    </section>
                </div>
            )}

            <Overview product={product} />
        </>
    );
}

export default ProductInfo;
