import React, {Component} from 'react';
import AdminHeader from '../general/header/admin_header'
import NavButton from '../general/navButton'
import EditListItem from './editListItem'
import axios from 'axios';


const EditList = () => {
    return(
        <div className='section-container'>
            <AdminHeader />
            <NavButton text="Edit Post" buttonClasses="title center" onClick="null" />
            <h4 className="h4">Select Post</h4>
            <div className="green-space">
                <EditListItem />
                <EditListItem />
                <EditListItem />
                <EditListItem />

                <div className='list-item'>
                    <h5 className="h5 edit-list-title">Post Title</h5>
                    <h6 className="h6 indent italicized edit-list-date">Last Updated Month ##, ####</h6>
                </div>
                <div className='list-item'>
                    <h5 className="h5 edit-list-title">Post Title</h5>
                    <h6 className="h6 indent italicized edit-list-date">Last Updated Month ##, ####</h6>
                </div>
                <div className='list-item'>
                    <h5 className="h5 edit-list-title">Post Title</h5>
                    <h6 className="h6 indent italicized edit-list-date">Last Updated Month ##, ####</h6>
                </div>                
            </div>
        </div>
    )
}
export default EditList;




// class EditPost extends Component {
//     constructor (props){
//         super(props);

//     }
//     componentDidMount(e){
//         axios.get('/')
//     }
// }

