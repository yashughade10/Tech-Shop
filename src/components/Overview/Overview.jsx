import React, { useState } from 'react';
import productsData from '../../assets/productsData';
import { User } from 'lucide-react';
import reviewsData from '../../assets/reviewsData';

const Overview = ({ product }) => {

    const [specification, setSpecification] = useState(true); // Set specification as default
    const [overview, setOverview] = useState(false);
    const [reviews, setReviews] = useState(false);

    const toggleToSpecifications = () => {
        setSpecification(true);
        setOverview(false);
        setReviews(false);
    }
    const toggleToOverviews = () => {
        setOverview(true);
        setSpecification(false);
        setReviews(false);
    }
    const toggleToReviews = () => {
        setReviews(true);
        setSpecification(false);
        setOverview(false);
    }

    return (
        <>
            <div className='topproducts'>
                <section className='topproducts-1' id='topproducts-1'>
                    <button onClick={toggleToSpecifications}>Specifications</button>
                    <button onClick={toggleToOverviews}>Overview</button>
                    <button onClick={toggleToReviews}>Reviews</button>
                </section>
            </div>

            <center>
                {specification &&
                    <div className='overview'>
                        <div className='specification-data'>
                            <div>
                                <span>Brand </span>
                                <span className='dynamic-specification-data'>{product.brand}</span>
                            </div>
                            <div>
                                <span>Model </span>
                                <span className='dynamic-specification-data'>{product.title}</span>
                            </div>
                            <div>
                                <span>Generic Name </span>
                                <span className='dynamic-specification-data'>{product.category}</span>
                            </div>
                            <div>
                                <span>Headphone Type </span>
                                <span className='dynamic-specification-data'>{product.type}</span>
                            </div>
                            <div>
                                <span>Connectivity </span>
                                <span className='dynamic-specification-data'>{product.connectivity}</span>
                            </div>
                            <div>
                                <span>Microphone </span>
                                <span className='dynamic-specification-data'>Yes</span>
                            </div>
                        </div>
                    </div>
                }

            </center>
            {
                overview &&
                <div className='product-overview-details'>
                    <h4>The <span>{product.title}</span> On-Ear Wireless Headphones provides with fabulous sound quality</h4>
                    <li>Sound Tuned to Perfection</li>
                    <li>Comfortable to Wear</li>
                    <li>Long Hours Playback Time</li>
                    Buy the <span>{product.info}</span> which offers you with fabulous music experience by providing you
                    with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical
                    quality with these Headphones giving you a truly awesome audio experience. It blends with exceptional sound quality and a
                    range of smart features for an unrivalled listening experience.
                </div>
            }

            {
                reviews &&
                    <div className='review-data'>
                        {
                            reviewsData.map(item => (
                                <section className='each-review'>
                                    <div className='review-person-data'>
                                        <User className='user-image' color='#af90af' />
                                        <div>
                                            <p>{item.name}</p>
                                            <p>{item.rateCount}| {item.date}</p>
                                        </div>
                                    </div>
                                    <p>{item.review}</p>
                                </section>
                            ))
                        }
                    </div>
            }
        </>
    );
}

export default Overview;
