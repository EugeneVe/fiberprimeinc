import React from "react";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import "./ContactSection.scss";

const ContactSection = () => {
    const location = useLocation();
    const isContactPage = location.pathname === "/contacts";

    return (
        <div className="contact-section-wrapper">
            <div
                className={`title ${isContactPage ? "title-margin-top" : ""}`}
                data-aos="fade-down"
            >
                CONTACT US
            </div>
            <div className="contact-section-content">ContactSection</div>
        </div>
    );
};

export default ContactSection;
