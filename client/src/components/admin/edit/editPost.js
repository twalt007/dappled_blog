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
            postQuote: props.history.location.state.postQuote
        }

    }
    
    handleSubmit = async(values) => {
        const data = {
            userId: userId,
            post: {
                postType: values.postType,
                contentType: values.contentType,
                postTitle: values.postTitle,
                postContent: values.postContent,
                postQuote: values.postQuote,
            }
        }
        let state;
        try{
            const resp = await axios.post(`/api/admin/new-post`, data);
            console.log("hanleSubmit resp from axios call: ", resp);
            if (resp.data.code===200){
                state = 'success';         
            }
            history.push('/result-message', state);
            return;
        }
        catch (error){
            console.log("Error submitting content to be posted. ", error);
            history.push('/result-message');
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
                <PostForm handleSubmit={this.handleSubmit} mainHistory={this.state.history} text="Post" initialValues={initialValues}/>
            </div>
        )
    }
}

export default EditPost;