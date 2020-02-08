import React from 'react'

const NavTitleButton = props => {
    console.log(props)
    const {text, buttonClasses = "large-button fat-border", onClick = {reroute}, url=null, mainHistory} = props;
    function reroute(){
        console.log('props.history: ', mainHistory, 'this.props.history')
        mainHistory.push(url);
    }
    return (
        <div className = "button-container">
            <div className = {buttonClasses} {...onClick} >{text}</div>                
        </div>
    )
}

export default NavTitleButton;