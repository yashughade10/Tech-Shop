import { Search, ShoppingCart, User } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../../public/assets/productsData';
import { useSelector } from 'react-redux';

const Header = () => {

    const cartcount = useSelector( state => state.cartcount )

    const [openSeachbar, SetOpenSearchbar] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isSignup, setSignup] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length === 0) {
            setSearchQuery('');
            setSearchResults([]);
        }
        else {
            setSearchQuery(query);
            const results = productsData.filter(product =>
                product.title.toLowerCase().includes(query)
            );
            setSearchResults(results);
        }
    }

    const toggleSearchItem = () => {
        SetOpenSearchbar(false)
    }

    const toggleLogin = () => {
        setIsLogin(!isLogin);
        setSignup(false)
    }
    const toggleSignup = () => {
        setSignup(!isSignup);
        setIsLogin(false)
    }

    const toggleSearch = () => {
        SetOpenSearchbar(!openSeachbar)
        setSearchResults([]);
    }

    const closeForm = () => {
        setIsLogin(false)
    }
    const closeSignupForm = () => {
        setSignup(false)
    }
    return (
        <>
            <section className="header">
                <Link to="/" className='logo-link'>
                    <div className='logo'>
                        Tech-Shop
                    </div>
                </Link>
                <div className='nav-menu'>

                    {/* Searchbar */}
                    {
                        openSeachbar && (
                            <div className='search-bar'>
                                <input
                                    type="text"
                                    placeholder='Search Item'
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                                <span onClick={toggleSearch}>x</span>
                            </div>
                        )
                    }

                    {/* Display search results */}
                    {openSeachbar && searchResults.length > 0 && (
                        <div className="search-results">
                            {searchResults.map(product => (
                                <li key={product.id}>
                                    <Link className='product-title-search' onClick={toggleSearchItem} to={`/products/product-details/${encodeURIComponent(product.title)}`}>
                                        {product.title}
                                    </Link>
                                    <hr />
                                </li>
                            ))}
                        </div>
                    )}

                    {/* Login pop-up */}
                    {
                        isLogin && (
                            <div className='login-form'>
                                <button className='form-close' onClick={closeForm}>x</button>
                                <h3>Login</h3>
                                <p className='login-subtitle'>New here ? <span onClick={toggleSignup}> Create an account </span> </p>

                                <div>
                                    <input type="email" name="email" id="email" placeholder='Email' /><br />
                                    <input type="password" name="pass" id="pass" placeholder='Password' /><br />
                                    <button className='login-btn'>Login</button>
                                </div>

                                <hr />
                                <span className='login-options'>or login with</span>
                                <div className='login-btn-options'>
                                    <button>Facebook</button>
                                    <button>Google</button>
                                    <button>Twitter</button>
                                </div>
                            </div>
                        )
                    }

                    {/* Signup */}
                    {
                        isSignup && (
                            <div className='login-form'>
                                {/* <button className='form-close' onClick={closeSignupForm}>x</button> */}
                                <button className='form-close' onClick={closeSignupForm}>x</button>
                                <h3>Signup</h3>
                                <p className='login-subtitle'>Already have an account ? <span onClick={toggleLogin}> Login </span> </p>

                                <div>
                                    <input type="text" name="username" id="username" placeholder='Username' /><br />
                                    <input type="email" name="email" id="email" placeholder='Email' /><br />
                                    <input type="password" name="pass" id="pass" placeholder='Password' /><br />
                                    <input type="password" name="cnf-pass" id="cnf-pass" placeholder='Confirm Password' /><br />
                                    <button className='login-btn'>Signup</button>
                                </div>

                                <hr />
                                <span className='login-options'>or login with</span>
                                <div className='login-btn-options'>
                                    <button>Facebook</button>
                                    <button>Google</button>
                                    <button>Twitter</button>
                                </div>
                            </div>
                        )
                    }

                    <li>
                        <Search onClick={toggleSearch} className='search' />
                    </li>
                    <li>
                        <Link to='/cart' className='cart'>
                            <ShoppingCart />
                            {
                                cartcount == 0 ? <div></div> : 
                                <sup>{cartcount}</sup>
                            }
                        </Link>
                    </li>
                    <li>
                        <User onClick={toggleLogin} className='user-info' />
                    </li>
                </div>
            </section>
        </>
    );
}

export default Header;
