import React from 'react';
import logo from '../../../../assets/images/logo.jpg';
import ColoredLine from '../../../general/coloredLine';
import { Black, BrandingColor } from '../../../general/helpers';

const BlogFooter = props => {
    const {mainHistory} = props;
    const reroute = () =>{
        mainHistory.push('/home');
    }
    return (
        <div className="blog-footer center">
            <ColoredLine color = {BrandingColor} />
            <img className="logo blog-logo" src={logo} alt='Dappled Logo' onClick={reroute}/>
            <h1 className="page-name center-margins">Dappled</h1>
            <ColoredLine color = {BrandingColor} />
        </div>
    )
}

export default BlogFooter;