import React, {Component} from 'react'
import BlogHeader from '../general/header'
import BlogFooter from '../general/footer'
import NavButton from '../../general/navButton'


class Failure extends Component{
    constructor (props){
        super(props);

        this.state = {
            text: props.history.location.state,
        }

        this.history = props.history
    }

    render(){
        const { text } = this.props;
        let message =
        <div className="message">
            <h2 className="text center">*Well this is embarassing*</h2>
            <h4 className="text center top-space">Something didn't work right!</h4>
        </div>
    return (
        <div className = "blog section-container">
            <BlogHeader mainHistory={this.history}/>
            <div className = "blog-green-space">{message}</div>
            <div className="xlrg-flx-container center-margins flex-right">
                <NavButton buttonClasses='small-button' text='Home' url='/home' mainHistory={this.history}/>
            </div>
            <BlogFooter />
        </div>
    )
    }
    
}

export default Failure;