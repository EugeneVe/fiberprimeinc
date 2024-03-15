import React from "react";
import { useLocation } from "react-router-dom";
import ServicesImage from "assets/image/illustration_services.jpg";
import "aos/dist/aos.css";
import "../layoutsStyles/SectionsStyle.scss";
import "./ServicesSection.scss";

const ServicesSection = () => {
    const location = useLocation();
    const onTrainingPage = location.pathname === "/services";

    return (
        <div className={`section-wrapper services  ${onTrainingPage ? "on-page" : ""}`}>
            <div
                className="title"
                data-aos="fade-down"
            >
                SERVICES
            </div>
            <div
                className="sub-title"
                data-aos="fade-down"
                data-aos-duration="800"
            >
                With a wide array of knowledge, we're diversified in our offerings.
            </div>
            <div className="section-content">
                <div className="left-section">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        <b>Regardless of the project, our experience is guiding the future of broadband</b>
                    </div>
                    <br />
                    <br />
                    <p
                        data-aos="fade-right"
                        data-aos-duration="500"
                    >
                        <ul className="list-of-services">
                            <li>FTTX Deployment</li>
                            <li>OSP Cabling (Underground and Aerial)</li>
                            <li>Copper/Coax Cable Systems</li>
                            <li>Joint Trench Systems</li>
                            <li>MDU Installation</li>
                            <li>Splicing and Testing</li>
                            <li>Systems Integration</li>
                            <li>Feasibility Studies and Financial Projections</li>
                            <li>Start-up and Testing Services</li>
                            <li>Right-of-Way</li>
                            <li>Cabling/Plowing</li>
                            <li>Directional Boring</li>
                            <li>Trenching</li>
                            <li>Micro Trench</li>
                            <li>Rail Plow</li>
                            <li>Distributed Antenna Systems (DAS)</li>
                            <li>MAN WAN Deployment</li>
                            <li>Wireless Mesh Networks</li>
                        </ul>
                    </p>
                </div>
                <div
                    className="right-section"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <div className="illustration">
                        <img
                            src={ServicesImage}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
