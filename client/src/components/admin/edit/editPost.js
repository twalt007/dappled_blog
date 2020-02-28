import React, {Component} from 'react'
import AdminHeader from '../general/header/adminHeader'
import NavButton from '../../general/navButton'
import PostForm from '../general/form'
import axios from 'axios';

class EditPost extends Component {
    constructor (props){
        super(props);
        
        this.state={
            postTitle: props.history.location.state.postTitle,
            postContent: props.history.location.state.postContent,
            postQuote: props.history.location.state.postQuote,
            postId: props.history.location.state.id,
        }

        this.history = props.history;
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
        let resultMessageState;
        try{
            const resp = await axios.patch(`/api/admin/post-details/${this.state.postId}`, data);
            if (resp.status===200){
                resultMessageState = 'success';         
            }
            this.history.push('/result-message', resultMessageState);
            return;
        }
        catch (error){
            console.log("Error submitting content to be posted. ", error);
            this.history.push('/result-message');
        }
        
        
    }
    render(){
        let initialValues = { 
            postTitle: this.state.postTitle, 
            postContent: this.state.postContent, 
            postQuote: this.state.postQuote
        };
        
        return (
            <div className="section-container center">
                <AdminHeader mainHistory={this.history}/>
                <NavButton text="Edit Post" buttonClasses = "title center" onClick="null"/>
                <PostForm handleSubmit={this.handleSubmit} mainHistory={this.history} text="Update" initialValues={initialValues} returnUrl="/edit"/>
            </div>
        )
    }
}

export default EditPost;