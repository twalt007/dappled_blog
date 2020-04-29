import React from 'react'

const NavButton = props => {
    const {text, buttonClasses = "large-button", url=null, mainHistory, goBack=null, type=null, } = props;

    function reroute(){
        if(url){
            mainHistory.push(url);
        }
        else if (goBack){
            mainHistory.goBack();
        }
        else return;
    }
    return (
        <div className = "button-container">
            <div className = {`${buttonClasses} + no-border`} onClick={reroute} type={type} >{text}</div>                
        </div>
    )
}

export default NavButton;




