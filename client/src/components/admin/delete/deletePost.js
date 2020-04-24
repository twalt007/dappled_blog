import React, {Component} from 'react'
import AdminHeader from '../general/header/adminHeader'
import NavButton from '../../general/navButton'
import {formatDate} from '../../general/helpers'
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
        
        this.history = props.history;
    }
    reroute = () => {
        this.history.push('/delete');
    }
    handleDelete = async() => {
        let resultMessageState;
        try{
            const resp = await axios.patch(`/api/admin/delete-post/${this.state.postId}`);
            if (resp.status===200){
                resultMessageState = 'success';         
            }
            this.history.push('/result-message', resultMessageState);
            return;
        }
        catch (error){
            console.log("Error attempting to delete content. ", error);
            this.history.push('/result-message');
        }
             
    }
    render(){
        const formattedDate = formatDate(this.state.updatedAt);
        return (            
            <div className="admin admin-background section-container center">
                <AdminHeader mainHistory={this.history}/>
                <NavButton text="Delete Post" buttonClasses = "title center" onClick="null"/>
                <div className="xlrg-flx-container center-margins flex-left">
                    <h4 className="text top-space">Are you sure you wish to delete?</h4>
                </div>
                <div className="green-space align-left">
                    <h5 className="text edit-list-title">{this.state.postTitle}</h5>
                    <h6 className="text indent italicized last-edit-date">Last Modified on {formattedDate}</h6>
                </div>
                <div className="xlrg-flx-container center-margins flex-right">
                    <div className="lrg-container align-right top-space">
                        <div className = 'text small-button after-space' onClick={this.reroute} >Return</div>                
                        <div className='text small-button' onClick={this.handleDelete}>Delete</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeletePost;