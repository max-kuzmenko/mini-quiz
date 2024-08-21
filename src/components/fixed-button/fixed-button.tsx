import React from "react";

import cn from "classnames";

import "./fixed-button.css";

interface IFixedButtonProps {
    onClick: () => void;
    className?: string;
    buttonText?: string;
}

export const FixedButton: React.FC<IFixedButtonProps> = ({ className, buttonText, onClick }) => {
    return (
        <nav className={cn("button-container", className)}>
            <button className="button">{buttonText}</button>
        </nav>
    );
}

export default FixedButton;