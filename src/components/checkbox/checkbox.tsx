import React from "react";

import cn from "classnames";

import './checkbox.css';

interface ICheckboxProps {
    isChecked: boolean;
    isSquare?: boolean;
    onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<ICheckboxProps> = ({ isChecked, onChange, isSquare  }) => {
    return (
        <span onClick={() => onChange(!isChecked)} className={cn('checkbox', {
            square: isSquare,
            checked: isChecked
        })}>
            <svg className="checkicon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="#fff">
    <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7123 3.22964C14.0661 3.5632 14.098 4.13781 13.7835 4.51307L6.92635 12.6949C6.7684 12.8833 6.54375 12.9938 6.30608 12.9997C6.0684 13.0057 5.83906 12.9068 5.67285 12.7265L2.24428 9.00747C1.91333 8.64848 1.91942 8.07291 2.2579 7.7219C2.59637 7.37089 3.13905 7.37736 3.47 7.73634L6.25585 10.7582L12.5022 3.30513C12.8167 2.92988 13.3585 2.89608 13.7123 3.22964Z"
        fill="#fff"
    />
  </svg>
        </span>
    );
}

export default Checkbox;