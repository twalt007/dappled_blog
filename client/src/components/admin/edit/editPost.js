import React, {Component} from 'react'
import AdminHeader from '../general/header/admin_header'
import NavButton from '../general/navButton'
import PostForm from '../general/form/postForm'
import axios from 'axios';

class EditPost extends Component {
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
        const data = {
            post: {
                id: this.state.postId,
                postTitle: values.postTitle,
                postContent: values.postContent,
                postQuote: values.postQuote
            }
        }
        console.log("handleSubmit data: ", data);
        let resultMessageState;
        try{
            const resp = await axios.patch(`/api/admin/post-details/${this.state.postId}`, data);
            console.log("handleSubmit resp from axios patch call: ", resp);
            if (resp.status===200){
                resultMessageState = 'success';         
            }
            this.state.history.push('/result-message', resultMessageState);
            return;
        }
        catch (error){
            console.log("Error submitting content to be posted. ", error);
            this.state.history.push('/result-message');
        }
        
        
    }
    render(){
        let initialValues = { 
            postTitle: this.state.postTitle, 
            postContent: this.state.postContent, 
            postQuote: this.state.postQuote
        };
        
        return (
            <div className="section-container">
                <AdminHeader />
                <NavButton text="Edit Post" buttonClasses = "title center" onClick="null"/>
                <PostForm handleSubmit={this.handleSubmit} mainHistory={this.state.history} text="Update" initialValues={initialValues}/>
            </div>
        )
    }
}

export default EditPost;