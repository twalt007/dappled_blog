import React from 'react'
import {formatDate} from '../general/helpers'

//     0:
    // postId: "a7bfa991-455b-11ea-8fd0-a4db300c2566"
    // postTitle: "Hello World!"
    // updatedAt: "2020-02-05T03:53:45.000Z"

const EditListItem = (props) => {
    const {onClick, postTitle, createdAt, updatedAt } = props;

    let mostRecent = updatedAt;
    let dateText = 'Last updated on ';

    if(createdAt === updatedAt){
        mostRecent = createdAt;
        dateText = 'Created on ';
    }

    const formattedDate = formatDate(mostRecent);
    
    return(
        <div className='list-item' onClick={onClick}>
            <h5 className="h5 edit-list-title">{postTitle}</h5>
            <h6 className="h6 indent italicized edit-list-date">{dateText} {formattedDate}</h6>
        </div> 
    )
}

export default EditListItem;