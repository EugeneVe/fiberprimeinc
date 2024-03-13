import React from "react";
import "aos/dist/aos.css";
import { ReactComponent as AboutIllustration } from "../../assets/image/aboutus.svg";
import "../layoutsStyles/SectionsStyle.scss";

const TrainingSection = () => {
    return (
        <div
            className="section-wrapper"
            id="about-section"
        >
            <div
                className="title"
                data-aos="fade-down"
            >
                TRAINING
            </div>
            <div
                className="sub-title"
                data-aos="fade-down"
                data-aos-duration="800"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <div className="section-content">
                <div className="left-section">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>
                    </div>
                    <br />
                    <br />
                    <p
                        data-aos="fade-right"
                        data-aos-duration="500"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div
                    className="right-section"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <AboutIllustration />
                </div>
            </div>
        </div>
    );
};

export default TrainingSection;
