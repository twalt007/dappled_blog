import React from 'react'
import AdminHeader from '../general/header/admin_header'
import NavButton from '../general/navButton'
import PostForm from '../general/form/postForm'
import axios from 'axios';

const NewPost = props => {
    const {history} = props;
 
    const handleSubmit = (values) => {
        console.log("inside handleSubmit Funciton");
        history.push('/success');
        console.log("form values: ", values);
        //need to get userId from elsewhere; can't hardcode
        const userId = 'a9ec5c8d-455a-11ea-8fd0-a4db300c2566';
        const data = {
            userId: userId,
            post: {
                postTitle: values.postTitle,
                postContent: values.postContent,
                postQuote: values.postQuote,
            }
        }
        try{
            const resp = await axios.post(`/api/admin/new-post`, data, axiosConfig);
            console.log("hanleSubmit resp from axios call: ", resp);
            return ({"Congratulations! Your content was successfully posted!"})
        }
        catch (error){
            console.log("Error submitting content to be posted. ", error)
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