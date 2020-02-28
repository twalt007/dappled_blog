import React from 'react';
import AdminHeader from '../header'
import NavButton from '../../../general/navButton'

const PleaseWait = (props) => {
    const {text, mainHistory } = props;
    return(
        <div className='section-container center'>
            <AdminHeader mainHistory={mainHistory}/>
            <NavButton text={text} buttonClasses="title center" onClick="null" />
            <div className="xlrg-flx-container center-margins flex-left">
                <h4 className="h4">Select Post</h4>
            </div>
            <div className="green-space">
                <h2 className="h2 please-wait">Patience is a virtue!</h2>
                <h4 className="h4 please-wait top-space">Please wait while retrieving data</h4>
            </div>
        </div>
    );
}

export default PleaseWait;