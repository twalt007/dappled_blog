import React, {Component} from 'react'
import AdminHeader from '../general/header'
import NavButton from '../../general/navButton'


class Success extends Component{
    constructor (props){
        super(props);

        this.state={
            success: props.history.location.state
        }

        this.history = props.history
    }

    render(){
        let text;
        let message;
    if (this.state.success==='success'){
        text = "Success!";
        message = 
        <div className="message">
            <h4 className="h4 center">Congratulations! Action successfully completed!</h4>
            <h4 className="h4 center">You can rest in peace knowing this was done.</h4>
        </div>
    }else{
        text = "Whoops!";
        message =
        <div className="message">
            <h4 className="h4 center">*Wilting Feeling*</h4>
            <h4 className="h4 center">Something didn't work right!</h4>
            <h4 className="h4 center">Time to pull out the sluething glasses and do some investigating.</h4>
        </div>
    }
    return (
        <div className = "section-container">
            <AdminHeader mainHistory={this.history}/>
            <NavButton text={text} buttonClasses = "title center" onClick="null"/>
            <div className = "green-space">{message}</div>
            <div className="flexed">
                <NavButton buttonClasses='small-button' text='Admin Home' url='/' mainHistory={this.history}/>
            </div>
        </div>
    )
    }
    
}

export default Success;