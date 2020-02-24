import React from 'react';
import './blog_header.scss'
import logo from '../../../../assets/images/logo.jpg';
import ColoredLine from '../../../general/coloredLine';
import { Black } from '../../../general/helpers';

const BlogHeader = props => {
    const {mainHistory, text} = props;
    const reroute = () =>{
        mainHistory.push('/home');
    }
    return (
        <div className="admin-header-container">
            <div className='image-container'>
                <img className="logo" src={logo} alt='Dappled Logo' onClick={reroute}/>
                <h1 className="h1 page-name">{text}</h1>
            </div>
            <ColoredLine color = {Black} />
        </div>
    )
}

export default BlogHeader;