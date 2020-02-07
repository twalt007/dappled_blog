import React from 'react';
import AdminHeader from '../general/header'
import './admin_home.scss'

const AdminHome = props => {
    function createNewPost(){
        console.log('function syntax worked');
        props.history.push(`/new`)
    }
    return(
        <div className = "admin-home-container">
            <AdminHeader />
            <div className="home-text">
                <h1 className="h1 text">Welcome to your happy place!</h1>
                <h2 className="h2 text">What would you like to do?</h2>
            </div>
            
            <div className="function-buttons">
                <div className = "button-container">
                    <div className = "large-button fat-border button-text" onClick={createNewPost} >Create New Post</div>                
                </div>
                <div className = "button-container">
                    <div className = "large-button fat-border button-text">Edit Post</div>                
                </div> 
                <div className = "button-container">
                    <div className = "large-button fat-border button-text">Delete Post</div>                
                </div>          
            </div>
            <div className = "button-container">
                <div className = "fat-border small-button right bottom button-text">View</div>                
            </div>
        </div>
        
    )
}

export default AdminHome