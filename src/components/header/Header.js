import React from "react";
import Links from "../links/Links";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/FiberPrimeLogo.svg";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header-content">
                <Link
                    className="logo"
                    to="/"
                >
                    <Logo />
                </Link>
                <Links />
            </div>
        </div>
    );
};

export default Header;
