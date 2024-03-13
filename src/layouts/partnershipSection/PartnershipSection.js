import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { ReactComponent as AboutIllustration } from "../../assets/image/aboutus.svg";
import "aos/dist/aos.css";
import "../layoutsStyles/SectionsStyle.scss";
import "./PartnershipSection.scss";

const PartnershipSection = () => {
    const location = useLocation();
    const isMainPage = location.pathname === "/";
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 990);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <div
            className="section-wrapper partnership"
            id="about-section"
        >
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
                expectations, we're seeking experienced subcontractors nationwide. If you're skilled and ready to join our growing family, with an incredible backlog of projects awaiting, join the
                Team at Fiber Prime today.
            </div>
            <div className="section-content">
                <div className="left-section">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        {/* <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b> */}
                    </div>
                    {/* <br />
                    <br /> */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="500"
                    >
                        {!isMainPage && !isSmallScreen ? (
                            <iframe
                                className="form"
                                src="https://forms.monday.com/forms/embed/f658230862daa7590c89d1da7e2496d7?r=use1"
                            ></iframe>
                        ) : (
                            <Link
                                to="https://forms.monday.com/forms/f658230862daa7590c89d1da7e2496d7?r=use1"
                                className="mobile-link-to-form"
                            >
                                <button>Please fill up the form</button>
                            </Link>
                        )}
                    </div>
                </div>
                {/* <div
                    className="right-section"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <AboutIllustration />
                </div> */}
            </div>
        </div>
    );
};

export default PartnershipSection;
