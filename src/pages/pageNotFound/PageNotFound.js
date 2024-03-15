import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
    return (
        <div className="section-wrapper about on-page">
            <div
                className="title"
                data-aos="fade-down"
            >
                Error 404
            </div>
            <div
                className="sub-title"
                data-aos="fade-down"
                data-aos-duration="800"
            >
                Page not found!
            </div>
            <Link
                to="/"
                className="mobile-button home-link"
            >
                <button>HOME</button>
            </Link>
        </div>
    );
};

export default PageNotFound;
