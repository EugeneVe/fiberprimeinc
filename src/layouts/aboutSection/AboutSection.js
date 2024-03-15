import React from "react";
import { useLocation } from "react-router-dom";
import AboutImage from "assets/image/illustration_about.jpg";
import "aos/dist/aos.css";
import "../layoutsStyles/SectionsStyle.scss";

const AboutSection = () => {
    const location = useLocation();
    const onAboutPage = location.pathname === "/about";

    return (
        <div
            className={`section-wrapper about ${onAboutPage ? "on-page" : ""}`}
            id="about-section"
        >
            <div
                className="title"
                data-aos="fade-down"
            >
                ABOUT US
            </div>
            <div
                className="sub-title"
                data-aos="fade-down"
                data-aos-duration="800"
            >
                Our aim is to deliver an exceptional experience to our customers and partners
            </div>
            <div className="section-content">
                <div className="left-section">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        <b>Safety, Quality and Integrity are our the principles that fuel us</b>
                    </div>
                    <br />
                    <br />
                    <p
                        data-aos="fade-right"
                        data-aos-duration="500"
                    >
                        At Fiber Prime, we work to deliver results. Whether it's a deadline, a budget, a solution to a problem; Fiber Prime approaches every challenge from the perspective of a
                        solution. Our ability to combine technical knowledge, previous experience and growing pains, a large database of subcontractor partners and back end resources positions us to
                        overcome any potential logistical or technical challenges.
                    </p>
                </div>
                <div
                    className="right-section"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <div className="illustration">
                        <img
                            src={AboutImage}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
