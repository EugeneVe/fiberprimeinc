import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ title, onClick, disabled, className }) => {
    return (
        <div className={`custom-button ${className}`}>
            <button
                onClick={onClick}
                disabled={disabled}
            >
                {title}
            </button>
        </div>
    );
};

export default CustomButton;
