import React from 'react';
import AdminHeader from '../general/header'
import NavButton from '../../general/navButton'

const AdminHome = props => {
    const {history} = props
    return(
        <div className = "section-container center">
            <AdminHeader mainHistory={history}/>
            <div className="intro">
                <h1 className="h1 text">Welcome to your happy place!</h1>
                <h2 className="h2 text">What would you like to do?</h2>
            </div>
            <div className="function-buttons">
                <NavButton text='Create New Post' url='/new' mainHistory={history} />
                <NavButton text='Edit Post' url='/edit' mainHistory={history}/>
                <NavButton text='Delete Post' url='/delete' mainHistory={history}/>
            </div>
            <div className="lrg-flx-container flex-right">
                <NavButton buttonClasses='small-button' text='View' url='/home' mainHistory={history}/>
            </div>
        </div>        
    )
}

export default AdminHome