import React, { useState, useEffect } from "react";
import { ReactComponent as FiberPrimeLogo } from "../../assets/icons/FiberPrimeLogo.svg";
import { ReactComponent as ArrowsDownIcon } from "../../assets/icons/Arrows.svg";
import { Link } from "react-scroll";
import "aos/dist/aos.css";
import "./HeroSection.scss";

const HeroSection = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            id="home-page"
            className="hero-section-wrapper"
        >
            <div className="hero-section-upper-layer">
                <div className="hero-section-content">
                    <div
                        className="hero-logo"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                    >
                        <div className="upper-logo">
                            <FiberPrimeLogo />
                        </div>
                        <p className="hero-logo-name">Fiber Prime Inc.</p>
                    </div>
                    <div className="arrows-down">
                        <Link
                            to="about-section"
                            smooth={true}
                            duration={500}
                        >
                            <ArrowsDownIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
