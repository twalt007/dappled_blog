import React from 'react'
import AdminHeader from '../general/header/admin_header'
import NavButton from '../general/navButton'
import PostForm from '../general/form/postForm'
import axios from 'axios';

const NewPost = props => {
    const {history, userId='a9ec5c8d-455a-11ea-8fd0-a4db300c2566'} = props;
    const handleSubmit = async(values) => {
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
        console.log("handleSubmit new post data: ", data);
        let resultMessageState;
        try{
            const resp = await axios.post(`/api/admin/new-post`, data);
            console.log("hanleSubmit resp from axios call: ", resp);
            if (resp.data.code===200){
                resultMessageState = 'success';         
            }
            history.push('/result-message', resultMessageState);
            return;
        }
        catch (error){
            console.log("Error submitting content to be posted. ", error);
            history.push('/result-message');
        }
        
        
    }
    const initialValues = {postTitle:'', postContent: '', postQuote: ''}
    return (
        <div className="section-container">
            <AdminHeader />
            <NavButton text="Create New Post" buttonClasses = "title center" onClick="null"/>
            <PostForm handleSubmit={handleSubmit} mainHistory={history} text="Post" initialValues={initialValues}/>
        </div>
    )
}

export default NewPost;