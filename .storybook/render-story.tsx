import React from 'react';


// @ts-ignore
const renderStory = ({ ...rest }, { component: Component }) => {
    return (
        <div style={{ width: 360, margin: '-16px', position: "relative", }}>
            <Component {...rest} />
        </div>
    )
};

export default renderStory;