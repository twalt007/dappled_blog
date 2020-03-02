import React from 'react';

const ColoredLine = ({ color }) => {
    return(
        <hr style = {{
            color: color,
            backgroundColor: color,
            height: 0.01,
        }}
        />
    )
    
}

export default ColoredLine;