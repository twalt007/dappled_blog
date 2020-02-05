import React from 'react';

const ColoredLine = ({ color }) => {
    return(
        <hr style = {{
            color: color,
            backgroundColor: color,
            height: 2,
        }}
        />
    )
    
}

export default ColoredLine;