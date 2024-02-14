import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { Link as Anchor } from "react-scroll";
import { useLocation } from "react-router-dom";
import "./Links.scss";

const Links = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === "/about";
    const isContactPage = location.pathname === "/contacts";
    const [themeSwith, setThemeSwith] = useContext(ThemeContext);

    return (
        <div className="links-wrapper">
            <ul>
                <li>
                    {isAboutPage || isContactPage ? (
                        <Link to="/">Home</Link>
                    ) : (
                        <Anchor
                            to="home-page"
                            smooth={true}
                            duration={500}
                        >
                            Home
                        </Anchor>
                    )}
                </li>
                <li>
                    <Link
                        className={isAboutPage ? "on-page" : ""}
                        to="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className={isContactPage ? "on-page" : ""}
                        to="/contacts"
                    >
                        Contacts
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
