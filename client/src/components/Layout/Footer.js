import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <h3 className="text-center" style={{ marginTop: "20px" }}>The parcels are the nicest part of online shopping! Every time an order arrives at your door, it's like getting a gift.</h3>
            <p className="text-center">All Right Reserved &copy; Mrigaang Kumar</p>
            <p className="text-center">Website Made By: Tanishka Anand</p>
            <p className="text-center mt-3">
                <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>
            </p>
        </div>
    );
};

export default Footer;