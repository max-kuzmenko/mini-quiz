import React from "react";

import './summary.css';

interface ISummaryProps {
    items: Array<{ title: string, text: string }>;
}

export const Summary: React.FC<ISummaryProps> = ({ items }) => {
    return (
        <ul className="summary">
            {items.map((item, index) => (
                <li className="item" key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                </li>
            ))}
        </ul>
    )
}

export default Summary;