import React from "react";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import "./AboutSection.scss";

const AboutSection = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === "/about";

    return (
        <div
            id="about-section"
            className="about-section-wrapper"
        >
            <div
                className={`title ${isAboutPage ? "title-margin-top" : ""}`}
                data-aos="fade-down"
            >
                ABOUT US
            </div>
            <div className="about-section-content">AboutSection</div>
        </div>
    );
};

export default AboutSection;
