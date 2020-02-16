import React, {Component} from 'react';
import AdminHeader from '../general/header/admin_header'
import NavButton from '../general/navButton'
import EditListItem from './editListItem'
import axios from 'axios';


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

// console.log("hanleSubmit resp from axios call: ", resp);
//             let state;
//             if (resp.data.code===200){
//                 state = 'success';         
//             }
//             history.push('/result-message', state);
//             return;
//         }
        

class EditList extends Component{
    constructor(props){
        super(props);

        this.state={
            posts: []
        }
    }
     
    componentDidMount= async()=>{
        const {history, userId = 'a9ec5c8d-455a-11ea-8fd0-a4db300c2566'} = this.props;
        let state;
        try{           
            const resp = await axios.get(`/api/admin/post-list/${userId}`);
            const returnedPosts = resp.data;
            this.setState({
                posts: returnedPosts
            }, () => {console.log('hi')})
            //delete me!
            const test = this.state.posts;
            console.log("resp: ", resp);
            console.log("posts after call: ", test);

        }
        catch (error){
            console.log("Error getting list of posts.", error);
            history.push('/result-message', state);
        }  
    }
    goToDetails(postId){

    }

    render(){
        const postData = this.state.posts;
        
        if(!postData){
            return(
                <div className='section-container'>
                    <AdminHeader />
                    <NavButton text="Edit Post" buttonClasses="title center" onClick="null" />
                    <h4 className="h4">Select Post</h4>
                    <div className="green-space">
                        <h2 className="h2 please-wait">Patience is a virtue!</h2>
                        <h4 className="h4 please-wait">Please wait while retrieving data</h4>
                    </div>
                </div>
            ); 
        }
        const postList = postData.map((post,index) => {
            return(
                <EditListItem 
                    key={index}
                    {...post}
                    onClick={this.goToDetails.bind(this, post.postId)}
                />
            )
        });
        return(
            <div className='section-container'>
                <AdminHeader />
                <NavButton text="Edit Post" buttonClasses="title center" onClick="null" />
                <h4 className="h4">Select Post</h4>
                <div className="green-space">
                    {postList}                                  
                </div>
            </div>
        );
    }
}

export default EditList;

