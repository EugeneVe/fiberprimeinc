import React, { useContext } from "react";
import { MenuOpenContext } from "context/MenuOpenContext";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/icons/FiberPrimeLogo.svg";
import { ReactComponent as DotsIcon } from "assets/icons/Dots.svg";
import { ReactComponent as CrossIcon } from "assets/icons/Cross.svg";
import Links from "../links/Links";
import "./Header.scss";

const Header = () => {
    const { open, setOpen, setLinksList, linksList } = useContext(MenuOpenContext);
    const menuToggle = () => {
        setOpen(!open);
        setLinksList(!linksList);
    };
    const isiPhone = /iPhone/i.test(navigator.userAgent);

    return (
        <div className="header-wrapper">
            <div className={`header-content ${open ? "header-content-open" : ""}`}>
                <Link
                    className="logo"
                    to="/"
                >
                    <Logo />
                </Link>
                <Links />
                <div
                    className="menu-toggle-icon"
                    onClick={menuToggle}
                >
                    <div className={`toggle-icon ${isiPhone ? "iphone-style" : ""}`}> {open ? <CrossIcon /> : <DotsIcon />}</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
