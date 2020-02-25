import React from 'react'
import {formatDate} from '../../../general/helpers'


const PostTile = (props) => {
    const {onClick, postTitle, updatedAt, contentType='philosophy' } = props;

    
    const formattedDate = formatDate(updatedAt);
    
    return(
        <div className='list-item' onClick={onClick}>
            <h5 className="h5 edit-list-title">{postTitle}</h5>
            <h6 className="h6 indent italicized edit-list-date">{formattedDate}</h6>
        </div> 
    )
}

export default PostTile;