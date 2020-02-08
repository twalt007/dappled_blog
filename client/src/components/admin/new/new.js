import React from 'react'
import AdminHeader from '../general/header/admin_header'
import NavTitleButton from '../general/navTitleButton'

const NewPost = props => {
    return (
        <div className="admin-home">
            <AdminHeader />
            <NavTitleButton onClick={null} text="Create New Post" />
        </div>
    )
}

export default NewPost;