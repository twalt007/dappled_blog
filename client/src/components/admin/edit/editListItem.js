import React from 'react'

const EditListItem = (props) => {
    const {onClick} = props;
    return(
        <div className='list-item' onClick={onClick}>
            <h5 className="h5 edit-list-title">Post Title</h5>
            <h6 className="h6 indent italicized edit-list-date">Last Updated Month ##, ####</h6>
        </div> 
    )
}

export default EditListItem;