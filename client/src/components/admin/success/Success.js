import React from 'react'
import AdminHeader from '../general/header'
import NavButton from '../general/navButton'


const Success = props => {
    const {history} = props
    return (
        <div className = "section-container">
            <AdminHeader />
            <NavButton text="Success!" buttonClasses = "title center" onClick="null"/>
            <div className = "green-space">
                <h4 className="h4 center">Congratulations! Action successfully completed!</h4>
                <h4 className="h4 center">You can rest in peace knowing this was done.</h4>
            </div>
            <div className="flexed">
                <NavButton buttonClasses='small-button' text='Admin Home' url='/' mainHistory={history}/>
            </div>


        </div>
    )
}

export default Success;