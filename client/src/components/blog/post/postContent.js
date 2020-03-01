import React, {Component} from 'react'
import BlogHeader from '../general/header'
import BlogFooter from '../general/footer'
import NavButton from '../../general/navButton'
import {formatDate} from '../../general/helpers'

//need to figure out why name won't render
//perhaprs just hardcode everything so that contentType not needed and doesn't update the brand name at top
//next steps - make header, footer, css for each part

class PostContent extends Component {
    constructor (props){
        super(props);
        
        this.state={
            history: props.history,

            postId: props.history.location.state.id,
            contentType: props.history.location.state.contentType,
            postTitle: props.history.location.state.postTitle,
            postContent: props.history.location.state.postContent,
            postQuote: props.history.location.state.postQuote,
            updatedAt: props.history.location.state.updatedAt
        }
        
        this.history = props.history;
    }
    
    render(){
        const formattedDate = formatDate(this.state.updatedAt);
        const name = this.state.contentType;
        console.log ("name: ", name);
        return (            
            <div className="section-container">
                <BlogHeader mainHistory={this.history} name={name} />                
                <div className="green-space">
                    <h2 className="text edit-list-title">{this.state.postTitle}</h2>
                    <div className='text post-quote'>{this.state.postQuote}</div>
                    <div className='text post-content'>{this.state.postContent}</div>
                    <h6 className="text indent italicized last-edit-date">{formattedDate}</h6>
                </div>
                <div className="xlrg-flx-container center-margins flex-right">
                    <NavButton buttonClasses='small-button left' text='Return' url='/home' mainHistory={this.history}/>
                </div>
                <BlogFooter mainHistory={this.history} name={name}/>
            </div>
        )
    }
}

export default PostContent;