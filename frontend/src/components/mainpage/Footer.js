import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-column">
                    <h3>Customer Care</h3>
                    <ul>
                        <li><a href="https://www.myntra.com/contactus">Contact Us</a></li>
                        <li><a href="https://www.myntra.com/track-order">Track Order</a></li>
                        <li><a href="https://www.myntra.com/returns">Returns</a></li>
                        <li><a href="https://www.myntra.com/faq">FAQs</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Shop</h3>
                    <ul>
                        <li><a href="https://www.myntra.com/shop">Shop</a></li>
                        <li><a href="https://www.myntra.com/men">Men</a></li>
                        <li><a href="https://www.myntra.com/women">Women</a></li>
                        <li><a href="https://www.myntra.com/kids">Kids</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="https://www.myntra.com/aboutus">About Us</a></li>
                        <li><a href="https://www.myntra.com/careers">Careers</a></li>
                        <li><a href="https://www.myntra.com/press">Press</a></li>
                        <li><a href="https://www.myntra.com/investors">Investors</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Connect With Us</h3>
                    <ul className="social-icons">
                        <li><a href="https://www.facebook.com/myntra"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/myntra"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/myntra"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://www.pinterest.com/myntra"><i className="fa fa-pinterest"></i></a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Newsletter</h3>
                    <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <form>
                        <input type="email" placeholder="Your Email Address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Myntra. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
