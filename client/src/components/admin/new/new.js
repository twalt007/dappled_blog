import React from 'react'
import AdminHeader from '../general/header/admin_header'
import NavButton from '../general/navButton'
import PostForm from '../general/form/postForm'

const NewPost = props => {
    const history = props;
    return (
        <div className="new-container">
            <AdminHeader />
            <NavButton text="Create New Post" buttonClasses = "title center" onClick="null"/>
            <PostForm mainHistory={history} text="Post"/>
        </div>
        
    )
}

export default NewPost;