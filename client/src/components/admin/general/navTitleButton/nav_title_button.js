import React from 'React'

const NavTitleButton = props => {
    const {text, onClickFunction = null, buttonClasses = "large-button fat-border", url=null, mainHistory} = props;
    function reroute(){
        console.log('props.history: ', mainHistory, 'this.props.history')
        mainHistory.push(url);
    }
    return (
        <div className = "button-container">
            <div className = {buttonClasses} onClick={reroute} >{text}</div>                
        </div>
    )
}

export default NavTitleButton;