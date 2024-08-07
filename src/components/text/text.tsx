import React, {PropsWithChildren} from "react";
import cn from "classnames";

import './text.css';

interface ITextPropsProps extends PropsWithChildren {
    variant: 'heading' | 'regular';
}

export const Text: React.FC<ITextPropsProps> = ({ children, variant}) => {
    return (
        <p className={cn("text", { regular: variant === 'regular', heading: variant === 'heading' })}>
            {children}
        </p>
    );
}

export default Text;