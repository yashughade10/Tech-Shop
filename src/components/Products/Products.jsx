import React from 'react';
import productsData from '../../assets/productsData';
import { MoveRight, Star } from 'lucide-react';
import Advantages from '../Home/Advantages';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Action/Action';


const Products = () => {

    const [products, setProducts] = useState(productsData);
    const [minPrice, setMinPrice] = useState(449);
    const [maxPrice, setMaxPrice] = useState(19990);
    const [isFilterApplied, setIsFilterApplied] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    
    // const [isChecked, setIsChecked] = useState(false);
    const latestProduct = productsData.slice(0, 6)
    const featuredProduct = productsData.filter(product => product.tag)
    const topRatedProduct = productsData.filter(product => product.rateCount > 4)
    const lowestPriceProduct = productsData.filter(product => product.finalPrice).sort((a, b) => a.finalPrice - b.finalPrice);
    const highestPriceProduct = productsData.filter(product => product.finalPrice).sort((a, b) => b.finalPrice - a.finalPrice);

    const navigate = useNavigate();

    // Sort by filter
    const toggleProducts = (filter) => {
        setProducts(filter);
        setIsFilterApplied(true);
    }

    // Based on brands
    const toggleBrandFilter = (brand) => {
        const updatedBrands = [...selectedBrands];
        const index = updatedBrands.indexOf(brand);
        if (index === -1) {
            updatedBrands.push(brand);
        } else {
            updatedBrands.splice(index, 1);
        }
        setSelectedBrands(updatedBrands);
        setIsFilterApplied(true);
        filterBrandProducts(updatedBrands);
    }

    const filterBrandProducts = (selectedBrands) => {
        if (selectedBrands.length === 0) {
            setProducts(productsData);
        } else {
            const filteredProducts = productsData.filter(product => selectedBrands.includes(product.brand));
            setProducts(filteredProducts);
        }
    }


    // Based on Category
    const toggleCategoryFilter = (brand) => {
        const updatedBrands = [...selectedCategory];
        const index = updatedBrands.indexOf(brand);
        if (index === -1) {
            updatedBrands.push(brand);
        } else {
            updatedBrands.splice(index, 1);
        }
        setSelectedCategory(updatedBrands);
        setIsFilterApplied(true);
        filterCategoryProducts(updatedBrands);
    }

    const filterCategoryProducts = (selectedCategory) => {
        if (selectedCategory.length === 0) {
            setProducts(productsData);
        } else {
            const filteredProducts = productsData.filter(product => selectedCategory.includes(product.category));
            setProducts(filteredProducts);
        }
    }


    // Based on price range
    const filterByPriceRange = () => {
        const filteredProducts = productsData.filter(product => product.finalPrice >= minPrice && product.finalPrice <= maxPrice);
        setProducts(filteredProducts);
        setIsFilterApplied(true);
    }

    const handleMaxPriceChange = (e) => {
        setMaxPrice(parseInt(e.target.value));
    }



    // Clear filters button
    const clearFilters = () => {
        setProducts(productsData);
        setSelectedBrands([]);
        setSelectedCategory([]);
        setIsFilterApplied(false);

        document.querySelectorAll('input[type="checkbox"]').forEach(check => {
            check.checked = false;
        });
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
    


    return (
        <>
            <section className='product-page'>
                <div className='product-filter'>
                    {
                        isFilterApplied && <button onClick={clearFilters} className='clear-filter-btn'>Clear Filters</button>
                    }
                    <div className='hamburger-menu' onClick={() => setIsFilterOpen(!isFilterOpen)}>
                        <div className='menu-bar'></div>
                        <div className='menu-bar'></div>
                        <div className='menu-bar'></div>
                    </div>
                    <div className='sort-by'>
                        <h3>Sort By</h3>
                        <hr />
                        <li onClick={() => toggleProducts(latestProduct)}>Latest</li>
                        <li onClick={() => toggleProducts(featuredProduct)}>Featured</li>
                        <li onClick={() => toggleProducts(topRatedProduct)}>Top Rated</li>
                        <li onClick={() => toggleProducts(lowestPriceProduct)}>Price(Lowest First)</li>
                        <li onClick={() => toggleProducts(highestPriceProduct)}>Price(Highest First)</li>
                    </div>
                    <div className='filter-by'>
                        <h3>Filter By</h3>
                        <hr />
                        <div className='brands'>
                            <h4>Brands</h4>
                            <div >
                                <input type="checkbox" onClick={() => toggleBrandFilter('JBL')} name="jbl" id="jbl" />
                                <label htmlFor="jbl">JBL</label><br />
                            </div>
                            <div >
                                <input type="checkbox" onClick={() => toggleBrandFilter('boAt')} name="boat" id="boat" />
                                <label htmlFor="boat">boAt</label>
                            </div>
                            <div>
                                <input type="checkbox" onClick={() => toggleBrandFilter('Sony')} name="sony" id="sony" />
                                <label htmlFor="sony">Sony</label>
                            </div>
                        </div>
                        <div className='category'>
                            <h4>Category</h4>
                            <div>
                                <input type="checkbox" name="headphones" id="headphones" onClick={() => toggleCategoryFilter('Headphones')} />
                                <label htmlFor="headphones">Headphones</label><br />
                            </div>
                            <div>
                                <input type="checkbox" name="earbuds" id="earbuds" onClick={() => toggleCategoryFilter('Earbuds')} />
                                <label htmlFor="earbuds">Earbuds</label>
                            </div>
                            <div>
                                <input type="checkbox" name="earphones" id="earphones" onClick={() => toggleCategoryFilter('Earphones')} />
                                <label htmlFor="earphones">Earphones</label>
                            </div>
                            <div>
                                <input type="checkbox" name="neckbands" id="neckbands" onClick={() => toggleCategoryFilter('Neckbands')} />
                                <label htmlFor="neckbands">Neckbands</label>
                            </div>
                        </div>
                        <div className='price-range'>
                            <h4>Price</h4>
                            {/* <label htmlFor="range">&#8377;{ }</label><br />
                            <input type="range" name="range" id="range" color='red' /> */}
                            <label htmlFor="max-price">Max Price: &#8377;{maxPrice}</label>
                            <input 
                            onMouseUp={filterByPriceRange} 
                            type="range" 
                            name="max-price" 
                            id="max-price" 
                            min="449" 
                            max="19990" 
                            value={maxPrice} 
                            onChange={handleMaxPriceChange} 
                            />
                            <br />
                        </div>
                    </div>
                </div>
                <div className='product-cards'>
                    {products.map(product => (
                        <div key={product.id} className='card-length'>
                            <Link to={`/products/product-details/${encodeURIComponent(product.title)}`}>
                                <div className='product-images'>
                                    <img src={"src/Assets" + product.images[0]} alt={product.title} />
                                </div>
                            </Link>
                            <section className='product-detail'>
                                <Link to={`/products/product-details/${encodeURIComponent(product.title)}`} className='product-style'>
                                    <div>
                                        <div>
                                            {printStars(product.rateCount)}
                                        </div>
                                        <h6>{limitText(product.title, 19)}</h6>
                                        <p>{limitText(product.info, 30)}</p>
                                        <hr />
                                        <div className='price'>
                                            <p>&#8377;{product.finalPrice} <span>&#8377;{product.originalPrice}</span></p>
                                        </div>
                                    </div>
                                </Link>
                                <button className='product-add-to-cart-btn' onClick={()=> addtocartitem(product)}>Add to Cart</button>
                            </section>
                        </div>
                    ))
                    }
                </div>
            </section>
            <Advantages />
        </>
    );
}

export default Products;