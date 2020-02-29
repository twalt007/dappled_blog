import React from 'react';
import logo from '../../../../assets/images/logo.jpg';
import ColoredLine from '../../../general/coloredLine';
import { Black } from '../../../general/helpers';

const BlogHeader = props => {
    const {mainHistory} = props;
    const reroute = () =>{
        mainHistory.push('/home');
    }
    return (
        <div className="blog-header center">
            <img className="logo blog-logo" src={logo} alt='Dappled Logo' onClick={reroute}/>
            <h1 className="page-name center-margins">Dappled</h1>
            <ColoredLine color = {Black} />
        </div>
    )
}

export default BlogHeader;