import React from 'react';
import './blogHeader.scss'
import logo from '../../../../assets/images/logo.jpg';
import ColoredLine from '../../../general/coloredLine';
import { Black } from '../../../general/helpers';

const BlogHeader = props => {
    const {mainHistory, name} = props;
    const reroute = () =>{
        mainHistory.push('/home');
    }
    return (
        <div className="admin-header-container">
            <div className='image-container'>
                <img className="logo" src={logo} alt='Dappled Logo' onClick={reroute}/>
                <h1 className="h1 page-name">{name}</h1>
            </div>
            <ColoredLine color = {Black} />
        </div>
    )
}

export default BlogHeader;