import React, {Component} from 'react';
import AdminHeader from '../general/header/admin_header'
import NavButton from '../general/navButton'
import EditListItem from './editListItem'
import axios from 'axios';
import { formatUrl } from '../general/helpers';
       

class EditList extends Component{
    constructor(props){
        super(props);

        this.state={
            posts: []
        }
    }
     
    componentDidMount= async()=>{
        const {history, userId = 'a9ec5c8d-455a-11ea-8fd0-a4db300c2566'} = this.props;
        let resultMessageState;
        try{           
            const resp = await axios.get(`/api/admin/post-list/${userId}`);
            const returnedPosts = resp.data;
            this.setState({
                posts: returnedPosts
            })
            //delete me!
            const test = this.state.posts;
            console.log("resp: ", resp);
            console.log("posts after call: ", test);

        }
        catch (error){
            console.log("Error getting list of posts.", error);
            history.push('/result-message', resultMessageState);
        }  
    }
    goToDetails = async(postId) => {
        const {history} = this.props;
        let resultMessageState;
        try{           
            const resp = await axios.get(`/api/admin/post-details/${postId}`);
            console.log("goToDetails resp: ", resp);
            const [ postDetails ] = resp.data;
            console.log("PostDetails: ", postDetails);
            const titleUrl = formatUrl(postDetails);
            history.push(`/edit-post/${titleUrl}`);
            
            
            //send information on post clicked on and returned from resp to the next page
            //set up page to decompose and recieve, and  place into the input sections
            //fingers crossed this will work!!!

            //set up API call so that is a patch request on these
            //set up API to work accordingly  -copy much of error handling used in origional post

            //celebrate!  and move on to delete section
           
        }
        catch (error){
            console.log("Error getting post details.", error);
            history.push('/result-message', resultMessageState);
        } 
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

