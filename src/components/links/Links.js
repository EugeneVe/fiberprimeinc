import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Links.scss";

const Links = () => {
    const location = useLocation();
    const [themeSwith, setThemeSwith] = useContext(ThemeContext);

    const getLinkClassName = (pathname, currentPage) => {
        return pathname === currentPage ? "on-page" : "";
    };

    return (
        <div className="links-wrapper open-links">
            <ul>
                <li>
                    <Link
                        className={getLinkClassName(location.pathname, "/about")}
                        to="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className={getLinkClassName(location.pathname, "/services")}
                        to="/services"
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        className={getLinkClassName(location.pathname, "/partnership")}
                        to="/partnership"
                    >
                        Partnership
                    </Link>
                </li>
                <li>
                    <Link
                        className={getLinkClassName(location.pathname, "/careers")}
                        to="/careers"
                    >
                        Careers
                    </Link>
                </li>
                <li>
                    <Link
                        className={getLinkClassName(location.pathname, "/training")}
                        to="/training"
                    >
                        Training
                    </Link>
                </li>
                <li>
                    <Link
                        className={getLinkClassName(location.pathname, "/contacts")}
                        to="/contact"
                    >
                        Contact
                    </Link>
                </li>
                <div className="switcher">
                    <div
                        className={`light-dark-switcher ${themeSwith ? "on-dark" : ""}`}
                        onClick={() => setThemeSwith(!themeSwith)}
                        title={themeSwith ? "Switch to Light theme" : "Switch to Dark theme"}
                    />
                </div>
            </ul>
        </div>
    );
};

export default Links;
