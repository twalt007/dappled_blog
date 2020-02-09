import React from 'react';
import AdminHeader from '../general/header'
import NavButton from '../general/navButton'
import './admin_home.scss'

const AdminHome = props => {
    const {history} = props
    return(
        <div className = "admin-home-container">
            <AdminHeader />
            <div className="home-text">
                <h1 className="h1 text">Welcome to your happy place!</h1>
                <h2 className="h2 text">What would you like to do?</h2>
            </div>
            
            <div className="function-buttons">
                <NavButton text='Create New Post' url='/new' mainHistory={history} />
                <NavButton text='Edit Post' url='/edit' mainHistory={history}/>
                <NavButton text='Delete Post' url='delete' mainHistory={history}/>
            </div>
            <div className="view-button right bottom">
                <NavButton buttonClasses='small-button fat-border ' text='View' url='home' mainHistory={history}/>
            </div>
        </div>
        
    )
}

export default AdminHome