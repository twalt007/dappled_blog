import React, {Component} from 'react'
import BlogHeader from '../general/header'
import BlogFooter from '../general/footer'
import NavButton from '../../general/navButton'


class Failure extends Component{
    constructor (props){
        super(props);

        this.state = {
            text: props.history.location.state
        }

        this.history = props.history
    }

    render(){
        console.log("inside failr component; state passed from props: ", this.state.text)
        const { text } = this.props;
        let message =
        <div className="message">
            <h4 className="h4 center">*Well this is embarassing*</h4>
            <h4 className="h4 center">Something didn't work right!</h4>
        </div>
    return (
        <div className = "section-container">
            <BlogHeader mainHistory={this.history} text={text}/>
            <div className = "green-space">{message}</div>
            <div className="flexed">
                <NavButton buttonClasses='small-button' text='Home' url='/home' mainHistory={this.history}/>
            </div>
            <BlogFooter />
        </div>
    )
    }
    
}

export default Failure;