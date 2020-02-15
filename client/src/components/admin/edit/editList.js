import React, {Component} from 'react';
import AdminHeader from '../general/header/admin_header'
import NavButton from '../general/navButton'
import EditListItem from './editListItem'
import axios from 'axios';

//test to make sure this axios call is getting made, looks to be in order
//create API on server
//test API on server
//hook up API call on front end withh server
//make sure all console logging out
//change below item to be a class component so that API call happening with pg load
//feed content into props on list item to ahve render for each using map
//update ontent to vary with logic for updated at (actually, don't need this yet.  no archive posibilities.  updated suffices for bothcreated and jpdate)
//celebrate!!
//set up onClick for going to page with details for that item; ==>
//make api call for item
//push into the editingpage
//


const EditList = props => {
    const {history, userId} = props;
    const getPostList= async()=>{
        try{
            console.log("before apiCall");            
            const resp = await axios.get(`/api/admin/post-list/${userId}`);
            console.log("apiCal resp from axios call: ", resp);            
        }
        catch (error){
            // let state;
            // history.push('/success', state);
        }  
    }
    return(
        <div className='section-container'>
            <AdminHeader />
            <NavButton text="Edit Post" buttonClasses="title center" onClick="null" />
            <h4 className="h4">Select Post</h4>
            <div className="green-space">
                <EditListItem onClick={getPostList}/>
                <EditListItem />
                <EditListItem />
                <EditListItem />

                <div className='list-item'>
                    <h5 className="h5 edit-list-title" onClick={getPostList} >Post Title</h5>
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

