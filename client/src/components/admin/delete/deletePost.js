import React, {Component} from 'react'
import AdminHeader from '../general/header/admin_header'
import NavButton from '../general/navButton'
import {formatDate} from '../general/helpers'
import axios from 'axios';

class DeletePost extends Component {
    constructor (props){
        super(props);
        
        this.state={
            history: props.history,

            postTitle: props.history.location.state.postTitle,
            // postContent: props.history.location.state.postContent,
            // postQuote: props.history.location.state.postQuote,
            postId: props.history.location.state.id,
            updatedAt: props.history.location.state.updatedAt
        }
    }
    
    handleDelete = async() => {
        console.log("handle delete called");
        let resultMessageState;
        try{
            const resp = await axios.post(`/api/admin/delete-post/${this.state.postId}`);
            if (resp.status===200){
                resultMessageState = 'success';         
            }
            this.state.history.push('/result-message', resultMessageState);
            return;
        }
        catch (error){
            console.log("Error attempting to delete content. ", error);
            this.state.history.push('/result-message');
        }
             
    }
    render(){
        const formattedDate = formatDate(this.state.updatedAt);
        return (            
            <div className="section-container">
                <AdminHeader mainHistory={this.state.history}/>
                <NavButton text="Delete Post" buttonClasses = "title center" onClick="null"/>
                <h4 className="h4">Are you sure you wish to delete?</h4>
                <div className="green-space">
                    <h5 className="h5 edit-list-title">{this.state.postTitle}</h5>
                    <h6 className="h6 indent italicized edit-list-date">Last Modified on {formattedDate}</h6>
                </div>
                <div className="flexed">
                    <NavButton buttonClasses='small-button left' text='Return' url='/delete' mainHistory={this.state.history}/>
                    <div className='small-button fat-border button' onClick={this.handleDelete}>Delete</div>
                </div>
            </div>
        )
    }
}

export default DeletePost;