import React from 'react';
import logo from '../../../../assets/images/logo.png';
import ColoredLine from '../../../general/coloredLine';
import { BrandingColor } from '../../../general/helpers';
import './blogFooter.scss'

const BlogFooter = props => {
    const {mainHistory} = props;
    const reroute = () =>{
        mainHistory.push('/home');
    }
    return (
        <div className="blog-footer center">
            <ColoredLine color = {BrandingColor} />
            <img className="logo" src={logo} alt='Dappled Logo' onClick={reroute}/>
            <h1 className="text page-name center-margins">Dappled</h1>
            <ColoredLine color = {BrandingColor} />
        </div>
    )
}

export default BlogFooter;