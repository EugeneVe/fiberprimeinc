import React from "react";
import { useLocation } from "react-router-dom";
import ContactsImage from "assets/image/illustration_contacts.jpg";
import "aos/dist/aos.css";
import "../layoutsStyles/SectionsStyle.scss";
import "./ContactSection.scss";

const ContactSection = () => {
    const location = useLocation();
    const onTrainingPage = location.pathname === "/contact";

    return (
        <div className={`section-wrapper contacts  ${onTrainingPage ? "on-page" : ""}`}>
            <div
                className="title"
                data-aos="fade-down"
            >
                CONTACT US
            </div>
            <div
                className="sub-title"
                data-aos="fade-down"
                data-aos-duration="800"
            >
                Get in touch with Fiber Prime Inc. to explore possibilities together...
            </div>
            <div className="section-content">
                <div className="left-section">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                    ></div>

                    <div
                        className="address"
                        data-aos="fade-right"
                        data-aos-duration="500"
                    >
                        <span> Address: </span>
                        <a
                            href="https://maps.app.goo.gl/SeP7kgyebYn8qTCJ6"
                            target="_blank"
                        >
                            2400 Satellite Blvd, Buford, GA 30518
                        </a>
                        <span> Phone: </span>
                        <a href="tel:">+1(404)556-2876</a>
                        <a href="tel:">+1(770)545-7169</a>
                        <span>Email: </span>
                        <a href="mailto:elijah@prime-fiber.com">elijah@prime-fiber.com</a>
                    </div>
                </div>
                <div
                    className="right-section"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <div className="illustration">
                        <a
                            href="https://maps.app.goo.gl/y8fqpvza5z94UcSc6"
                            target="_blank"
                        >
                            <img
                                src={ContactsImage}
                                alt="map"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
