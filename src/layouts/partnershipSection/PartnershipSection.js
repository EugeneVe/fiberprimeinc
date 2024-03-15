import React from "react";
import { Link, useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import "../layoutsStyles/SectionsStyle.scss";
import "./PartnershipSection.scss";

const PartnershipSection = () => {
    const location = useLocation();
    const isMainPage = location.pathname === "/";

    return (
        <div className="section-wrapper partnership">
            <div
                className="title"
                data-aos="fade-down"
            >
                We are looking for Partners
            </div>
            <div
                className="sub-title"
                data-aos="fade-down"
                data-aos-duration="800"
            >
                At Fiber Prime, we're experiencing high demand for our services as businesses and communities seek to enhance their technology infrastructure. To meet this demand and exceed customer
                expectations, we're seeking experienced subcontractors nationwide. If you're skilled and ready to join our growing family, with an incredible backlog of projects awaiting, partner the
                Team at Fiber Prime today.
            </div>
            <div className="section-content">
                <div
                    className="midle-section"
                    data-aos="fade-right"
                    data-aos-duration="500"
                >
                    {!isMainPage ? (
                        <iframe
                            className="form"
                            src="https://forms.monday.com/forms/embed/f658230862daa7590c89d1da7e2496d7?r=use1"
                        ></iframe>
                    ) : (
                        <Link
                            to="/partnership"
                            className="mobile-button"
                        >
                            <button>Please fill out the form</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PartnershipSection;
