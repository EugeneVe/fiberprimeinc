import React from "react";
import { useLocation } from "react-router-dom";
import TrainingImage from "assets/image/illustration_training.jpg";
import "aos/dist/aos.css";
import "../layoutsStyles/SectionsStyle.scss";

const TrainingSection = () => {
    const location = useLocation();
    const onTrainingPage = location.pathname === "/training";

    return (
        <div className={`section-wrapper  ${onTrainingPage ? "on-page" : ""}`}>
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
                Fiber Prime can accelerate the learning curve and help position you to take on bigger projects
            </div>
            <div className="section-content">
                <div className="left-section">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        <b>Fiber Prime has experience and resources to help your team get trained up.</b>
                    </div>
                    <br />
                    <br />
                    <p
                        data-aos="fade-right"
                        data-aos-duration="500"
                    >
                        Fiber Prime has experience and resources to help your team get trained up. We offer curriculum for both theoretical and practical knowledge advancement. We have our own proven
                        system that can train your team in a short period of time, and allow you to tackle bigger projects with more advanced tech.
                    </p>
                </div>
                <div
                    className="right-section"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <div className="illustration">
                        <img
                            src={TrainingImage}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingSection;
