import React from 'react';

const ColoredLine = ({ color }) => {
    return(
        <hr style = {{
            color: color,
            backgroundColor: color,
            height: 0.01,
            marginLeft: "4%",
            marginRight: "4%"
        }}
        />
    )
    
}

export default ColoredLine;