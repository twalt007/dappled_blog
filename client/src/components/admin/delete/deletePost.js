import React, {Component} from 'react'
import AdminHeader from '../general/header/admin_header'
import NavButton from '../general/navButton'
import PostForm from '../general/form/postForm'
import axios from 'axios';

class DeletePost extends Component {
    constructor (props){
        super(props);
        
        this.state={
            history: props.history,

            postTitle: props.history.location.state.postTitle,
            postContent: props.history.location.state.postContent,
            postQuote: props.history.location.state.postQuote,
            postId: props.history.location.state.id,
        }
    }
    
    handleSubmit = async(values) => {
        //create current date/need to ask how a delete request is normally performed
        const data = {
            post: {
                id: this.state.postId,
                postTitle: values.postTitle,
                postContent: values.postContent,
                postQuote: values.postQuote
            }
        }
        let resultMessageState;
        try{
            const resp = await axios.patch(`/api/admin/post-details/${this.state.postId}`, data);
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
        //will return data -->  very similar to thhe post list, except for will only have one item and will show a preview of the first portion of the content.  in a future set.  right now simply show the title and the date, and add text to ask if want to delete for sure?  add note to meistertask about wanting to delete
        
        let initialValues = { 
            postTitle: this.state.postTitle, 
            postContent: this.state.postContent, 
            postQuote: this.state.postQuote
        };
        
        return (
            <div className="section-container">
                <AdminHeader />
                <NavButton text="Delete Post" buttonClasses = "title center" onClick="null"/>
                <PostForm handleSubmit={this.handleSubmit} mainHistory={this.state.history} text="Update" initialValues={initialValues}/>
            </div>
        )
    }
}

export default DeletePost;