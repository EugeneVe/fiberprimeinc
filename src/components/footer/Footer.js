import React from "react";
import { ReactComponent as FiberPrimeFullLogo } from "../../assets/icons/FiberPrime.svg";
import "./Footer.scss";

const Footer = () => {
    const startYear = 2024;
    let nextYear = new Date().getFullYear();
    return (
        <div className="footer-wrapper">
            <div className="footer-content">
                <div className="footer-logo">
                    <FiberPrimeFullLogo />
                </div>
                <div className="date">
                    Copyright © Fiber Prime Inc. {startYear} {startYear !== nextYear ? <>- {nextYear}</> : <></>}
                </div>

                <div className="designed">
                    <a
                        href="https://eugeneve.github.io/"
                        target="blank"
                    >
                        YV Desing
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
