import React from 'react';
import AdminHeader from '../general/header'
import NavTitleButton from '../general/navTitleButton'
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
                <NavTitleButton text='Create New Post' url='/new' mainHistory={history} />
                <NavTitleButton text='Edit Post' url='/edit' mainHistory={history}/>
                <NavTitleButton text='Delete Post' url='delete' mainHistory={history}/>
            </div>
            <NavTitleButton buttonClasses='small-button fat-border right bottom' text='View' url='home' mainHistory={history}/>
        </div>
        
    )
}

export default AdminHome