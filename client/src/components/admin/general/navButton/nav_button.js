import React from 'react'

const NavButton = props => {
    const {text, buttonClasses = "large-button", url=null, mainHistory, type=null} = props;

    function reroute(){
        mainHistory.push(url);
    }
    return (
        <div className = "button-container">
            <div className = {`${buttonClasses} + fat-border`} onClick={url?reroute:null} type={type} >{text}</div>                
        </div>
    )
}

export default NavButton;




