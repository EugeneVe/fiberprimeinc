import React from "react";
import { useLocation } from "react-router-dom";
import Comments from "components/comments/Comments";
import "aos/dist/aos.css";
import "../layoutsStyles/SectionsStyle.scss";

const CommentsSection = () => {
    const location = useLocation();
    const onTrainingPage = location.pathname === "/training";

    return (
        <div className={`section-wrapper  ${onTrainingPage ? "on-page" : ""}`}>
            <div
                className="title"
                data-aos="fade-down"
            >
                Comments
            </div>
            <div
                className="sub-title"
                data-aos="fade-down"
                data-aos-duration="800"
            >
                Please leave your comment...
            </div>
            <div className="section-content">
                <div
                    className="midle-section"
                    data-aos="fade-right"
                    data-aos-duration="500"
                >
                    <Comments />
                </div>
            </div>
        </div>
    );
};

export default CommentsSection;
