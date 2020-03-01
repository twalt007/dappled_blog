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
            <h4 className="text center">Congratulations! Action successfully completed!</h4>
            <h5 className="text center top-space">You can rest in peace knowing this was done.</h5>
        </div>
    }else{
        text = "Whoops!";
        message =
        <div className="message">
            <h4 className="text center">*Wilting Feeling*</h4>
            <h5 className="text center top-space">Something didn't work right!</h5>
            <h5 className="text center">Time to pull out the sluething glasses and do some investigating.</h5>
        </div>
    }
    return (
        <div className = "section-container center">
            <AdminHeader mainHistory={this.history}/>
            <NavButton text={text} buttonClasses = "title center" onClick="null"/>
            <div className = "text green-space">{message}</div>
            <div className="xlrg-flx-container center-margins flex-right">
                <NavButton buttonClasses='small-button' text='Admin Home' url='/' mainHistory={this.history}/>
            </div>
        </div>
    )
    }
    
}

export default Success;