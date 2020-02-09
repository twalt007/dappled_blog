import React from 'react';

const NavButton = props => {
    const {text, buttonClasses = "large-button right"} = props;

    return (
        <div className = "button-container fat-border ">
            <div className = {buttonClasses} onClick={reroute}>{text}</div>                
        </div>
    )
}

export default NavButton;