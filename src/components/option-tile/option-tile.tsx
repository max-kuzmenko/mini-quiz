import React, { PropsWithChildren } from "react";

import cn from "classnames";

import './option-tile.css';

interface IOptionTileProps extends PropsWithChildren{
    isActive?: boolean;
}

export const OptionTile: React.FC<IOptionTileProps> = ({ children, isActive }) => {
    return (<div className={cn("option", { active: isActive })}>{children}</div>);
}

export default OptionTile;