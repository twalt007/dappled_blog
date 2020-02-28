import React from 'react'
import {formatDate} from '../../../general/helpers'


const ListItem = (props) => {
    const {onClick, postTitle, createdAt, updatedAt } = props;

    let mostRecent = updatedAt;
    let dateText = 'Last updated on ';

    if(createdAt === updatedAt){
        mostRecent = createdAt;
        dateText = 'Created on ';
    }

    const formattedDate = formatDate(mostRecent);
    
    return(
        <div className='list-item align-left' onClick={onClick}>
            <h5 className="h5 edit-list-title">{postTitle}</h5>
            <h6 className="h6 indent italicized last-edit-date">{dateText} {formattedDate}</h6>
        </div> 
    )
}

export default ListItem;