import React from 'react'

const NavButton = props => {
    const {text, buttonClasses = "large-button", url=null, mainHistory, type=null, } = props;

    // function reroute(){
    //     if(url){
    //         mainHistory.push(url);
    //     }
    //     else if (){
            
    //     }
    // }
    function goBack(){
        history.goBack();
    }
    return (
        <div className = "button-container">
            <div className = {`${buttonClasses} + no-border`} onClick={url?reroute:null} type={type} >{text}</div>                
        </div>
    )
}

export default NavButton;




