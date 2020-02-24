import React from 'react';
import './blog_header.scss'
import logo from '../../../../assets/images/temp_header.jpg';
import ColoredLine from './coloredLine';
import { BrandingColor } from '../helpers';

const AdminHeader = props => {
    const {mainHistory} = props;
    const reroute = () =>{
        mainHistory.push('/');
    }
    return (
        <div className="admin-header-container">
            <div className='image-container'>
                <img className="logo" src={logo} alt='Dappled Logo' onClick={reroute}/>
            </div>
            <ColoredLine color = {BrandingColor} />
            <ColoredLine color = {BrandingColor} />
        </div>
    )
}

export default AdminHeader
