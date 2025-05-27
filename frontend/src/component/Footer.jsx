import React from "react";
import "./Footer.css";
import logo from '../assets/frontend_assets/logo.png'
import ig from '../assets/frontend_assets/ig.webp'
import pint from '../assets/frontend_assets/pint.jpg'
import yt from '../assets/frontend_assets/yt.jpeg'
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={logo} alt="eCommerce Logo" />
          <p>
            ShopSmart is your trusted online store, delivering top-quality
            products at unbeatable prices. Explore a wide range of categories
            and enjoy fast, reliable delivery right to your doorstep.
          </p>
          <div className="footer-social-icons">
            <img src={ig} alt="Instagram" />
            <img src={pint} alt="Pinterest" />
            <img src={yt} alt="YouTube" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Explore</h2>
          <ul>
            <li>Shop</li>
            <li>Deals</li>
            <li>Categories</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Support</h2>
          <ul>
            <li>+1 (800) 123-4567</li>
            <li>support@shopsmart.com</li>
            <li>FAQs</li>
            <li>Return Policy</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2024 ShopSmart. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
