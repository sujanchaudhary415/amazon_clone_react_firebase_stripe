import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <a href="#top" className="footer__backToTop">Back to top</a>
            </div>
            <div className="footer__links">
                <div className="footer__column">
                    <h3>Get to Know Us</h3>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">About Amazon</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Amazon Devices</a>
                    <a href="#">Amazon Science</a>
                </div>
                <div className="footer__column">
                    <h3>Make Money with Us</h3>
                    <a href="#">Sell products on Amazon</a>
                    <a href="#">Sell on Amazon Business</a>
                    <a href="#">Sell apps on Amazon</a>
                    <a href="#">Become an Affiliate</a>
                    <a href="#">Advertise Your Products</a>
                    <a href="#">Self-Publish with Us</a>
                    <a href="#">Host an Amazon Hub</a>
                </div>
                <div className="footer__column">
                    <h3>Amazon Payment Products</h3>
                    <a href="#">Amazon Business Card</a>
                    <a href="#">Shop with Points</a>
                    <a href="#">Reload Your Balance</a>
                    <a href="#">Amazon Currency Converter</a>
                </div>
                <div className="footer__column">
                    <h3>Let Us Help You</h3>
                    <a href="#">Amazon and COVID-19</a>
                    <a href="#">Your Account</a>
                    <a href="#">Your Orders</a>
                    <a href="#">Shipping Rates & Policies</a>
                    <a href="#">Returns & Replacements</a>
                    <a href="#">Manage Your Content and Devices</a>
                    <a href="#">Amazon Assistant</a>
                    <a href="#">Help</a>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__logo">
                    <img src="https://imgs.search.brave.com/6-Ag3qlJQvMJgtjLvfxeckI81Yma6vlDr-PjXGnPR98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTcxNTQ4Nzk5/OGFtYXpvbi1sb2dv/LXRyYW5zcGFyZW50/LnBuZw" alt="Amazon Logo" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
