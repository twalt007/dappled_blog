import React from 'react'
import AdminHeader from '../general/header/admin_header'
import NavButton from '../general/navButton'
import PostForm from '../general/form/postForm'

const NewPost = props => {
    const {history} = props;
    const initialValues = {postTitle:'', postContent: '', postQuote: ''}
    return (
        <div className="section-container">
            <AdminHeader />
            <NavButton text="Create New Post" buttonClasses = "title center" onClick="null"/>
            <PostForm mainHistory={history} text="Post" initialValues={initialValues}/>
        </div>
    )
}

export default NewPost;