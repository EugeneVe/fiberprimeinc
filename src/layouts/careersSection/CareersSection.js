import React from "react";
import { useLocation } from "react-router-dom";
import CareerImage from "assets/image/illustration_career.jpg";
import "aos/dist/aos.css";
import "../layoutsStyles/SectionsStyle.scss";

const CareersSection = () => {
    const location = useLocation();
    const onCareersPage = location.pathname === "/careers";

    return (
        <div className={`section-wrapper careers ${onCareersPage ? "on-page" : ""}`}>
            <div
                className="title"
                data-aos="fade-down"
            >
                CAREERS
            </div>
            <div
                className="sub-title"
                data-aos="fade-down"
                data-aos-duration="800"
            >
                Align your future with an industry that is growing.
            </div>
            <div className="section-content">
                <div className="left-section">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        <b>Fiber Prime believes without a doubt that people are the most important resource in high-tech construction.</b>
                    </div>
                    <br />
                    <br />
                    <p
                        data-aos="fade-right"
                        data-aos-duration="500"
                    >
                        The technology changes, the advancements keep rolling in, but it takes good people to deploy. Fiber Prime is always interested in positive minded, dynamic individuals that want
                        to take on the challenges of bringing connectivity to the masses.
                    </p>
                </div>
                <div
                    className="right-section"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <div className="illustration">
                        <img
                            src={CareerImage}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersSection;
