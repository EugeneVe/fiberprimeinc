import React, { useContext } from "react";
import { MenuOpenContext } from "context/MenuOpenContext";
import Links from "../links/Links";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/icons/FiberPrimeLogo.svg";
import "./Header.scss";

const Header = () => {
    const { open, setOpen, setLinksList, linksList } = useContext(MenuOpenContext);
    const menuToggle = () => {
        setOpen(!open);
        setLinksList(!linksList);
    };

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
                    {open ? <span>╳</span> : <span>☲</span>}
                </div>
            </div>
        </div>
    );
};

export default Header;
