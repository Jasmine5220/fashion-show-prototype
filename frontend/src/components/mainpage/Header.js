/* src/components/Header.js*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from "../../assets/logo.png";

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Myntra Logo" />
            </div>
            <nav>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Home & Living</li>
                    <li>Beauty</li>
                    <li>Studio</li>
                </ul>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Search for products, brands and more" />
            </div>
            <div className="user-options">
                <div className="option">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Profile</span>
                </div>
                <div className="option">
                    <FontAwesomeIcon icon={faHeart} />
                    <span>Wishlist</span>
                </div>
                <div className="option">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <span>Bag</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
