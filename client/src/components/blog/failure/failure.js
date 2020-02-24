import React, {Component} from 'react'
import BlogHeader from '../general/header'
import BlogFooter from '../general/footer'



/// want to add in footer here - need to craete footer elsewehere
//need to add this to the indext for failure
//onblog home, need to make api call to get inforamtion
//need to create blogtile component - use dummy info
//need to push real info into blogtile component
//need to make api call to render details
// need to make the blog post page
// need to clean up my css




class Failure extends Component{
    constructor (props){
        super(props);

        this.state={
            success: props.history.location.state
        }

        this.history = props.history
    }

    render(){
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

        </div>
    )
    }
    
}

export default Failure;