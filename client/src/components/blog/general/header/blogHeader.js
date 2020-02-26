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
        <div className="header-container">
            <img className="logo left" src={logo} alt='Dappled Logo' onClick={reroute}/>
            <h1 className="h1 page-name center">{name}</h1>
            <ColoredLine color = {Black} />
        </div>
    )
}

export default BlogHeader;