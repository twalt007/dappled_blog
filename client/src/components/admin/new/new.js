import React from 'react'
import AdminHeader from '../general/header/admin_header'
import NavButton from '../general/navButton'

const NewPost = props => {
    return (
        <div className="new-container">
            <AdminHeader />
                <NavButton text="Create New Post" buttonClasses = "large button title center" />
        </div>
    )
}

export default NewPost;