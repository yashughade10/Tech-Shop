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

const ProductInfo = () => {
    const { productInfo } = useParams(); // Use productInfo instead of id

    // Find the product with matching info
    const product = productsData.find(product => product.title === decodeURIComponent(productInfo));

    return (
        <>
            {product && (
                <div className="productsinfo" key={product.id}>
                    <section className="productsinfo-1">
                        {product.images.map((image, index) => (
                            <img src={`/src/assets/${image}`} alt="product-image" key={index} />
                        ))}
                    </section>
                    <section>
                        <img src={`/src/assets/${product.images[0]}`} alt="" />
                    </section>
                    <section className="productsinfo-3">
                        <h6>{product.title}</h6>
                        <p>{product.info}</p>
                        <p>{product.rateCount} <span>{product.ratings}</span></p>
                        <hr />
                        <div>
                            <section>
                                <h6>{product.finalPrice} <span>{product.originalPrice}</span></h6>
                                <p>You save: discount</p>
                                <p>(Inclusive of all Taxes)</p>
                            </section>
                            <section>
                                <button>In: Stock</button>
                            </section>
                        </div>
                        <hr />
                        <p>Offers and Discounts</p>
                        <div>
                            <p className="border">No Cost EMI on credit card</p>
                            <p className="border">Pay Later and Avail Cashback</p>
                        </div>
                        <hr />
                        <button id="cart">Add to Cart</button>
                    </section>
                </div>
            )}
        </>
    );
}

export default ProductInfo;
