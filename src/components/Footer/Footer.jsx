import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer>
                <footer className='footer'>
                    <div className='column-1'>
                        <h3>Tech-Shop</h3>
                        <p>Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
                        <input type="email" name="email" id="email" placeholder='Email Address*' /><br />
                        <button>Subscribe</button>
                    </div>

                    <div className='column-2'>
                        <h3>Help</h3>
                        <li>FAQs</li>
                        <li>Track Order</li>
                        <li>Cancel Order</li>
                        <li>Return Order</li>
                        <li>Warranty Info</li>
                    </div>

                    <div className='column-3'>
                        <h3>Policies</h3>
                        <li>Return Policy</li>
                        <li>Security</li>
                        <li>Sitemap</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </div>

                    <div className='column-4'>
                        <h3>Company</h3>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Service Centers</li>
                        <li>Careers</li>
                        <li>Affiliates</li>
                    </div>
                </footer>
                <hr />
                <div className="credit">
                    <div className="para">
                        <p>2023 | All Rights Reserved. Built By | <a href="#">Yashwant Ughade</a></p>
                    </div>
                    <div className="icons">
                        <li>
                            <Facebook />
                        </li>
                        <li>
                            <Twitter />
                        </li>
                        <li>
                            <Instagram />
                        </li>
                        <li>
                            <Linkedin />
                        </li>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
