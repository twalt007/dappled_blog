import React from 'react'
import {formatDate} from '../../../general/helpers'
import './postTile.scss'


const PostTile = (props) => {
    const {onClick, postTitle, updatedAt, postQuote, contentType='philosophy' } = props;
    const formattedDate = formatDate(updatedAt);
    
    return(
        <div className='tile-container'>
            <div className='tile' onClick={onClick}>
                <div className="preview-container">
                    <div className="center-text">
                        <h3 className="text tile-quote italicized">{postQuote}</h3>
                    </div>
                </div>
                <h4 className="text tile-title">{postTitle}</h4>
            </div> 
            <h6 className="text tile-date italicized align-right">{formattedDate}</h6>
        </div>
    )
}

export default PostTile;