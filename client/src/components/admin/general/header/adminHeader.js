import React from 'react';
import './adminHeader.scss'
import logo from '../../../../assets/images/logo.jpg';
import ColoredLine from '../../../general/coloredLine';
import { BrandingColor } from '../../../general/helpers';

const AdminHeader = props => {
    const {mainHistory} = props;
    const reroute = () =>{
        mainHistory.push('/');
    }
    return (
        <div className="header-container">
            <div className='image-container'>
                <img className="logo" src={logo} alt='Dappled Logo' onClick={reroute}/>
            </div>
            <ColoredLine color = {BrandingColor} />
            <ColoredLine color = {BrandingColor} />
        </div>
    )
}

export default AdminHeader
