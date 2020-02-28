import React, {Component} from 'react';
import AdminHeader from '../general/header/adminHeader'
import NavButton from '../../general/navButton'
import ListItem from '../general/listItem'
import PleaseWait from '../general/pleaseWait'
import axios from 'axios';
import { formatUrl } from '../../general/helpers';
       

class EditList extends Component{
    constructor(props){
        super(props);

        this.state={
            posts: null,
        }

        this.history = props.history;
    }
     
    componentDidMount= async()=>{
        const { userId = 'a9ec5c8d-455a-11ea-8fd0-a4db300c2566'} = this.props;
        let resultMessageState;
        try{           
            const resp = await axios.get(`/api/admin/post-list/${userId}`);
            const returnedPosts = resp.data;
            this.setState({
                posts: returnedPosts
            })

        }
        catch (error){
            console.log("Error getting list of posts.", error);
            this.history.push('/result-message', resultMessageState);
        }  
    }
    goToDetails = async(postId) => {
        let resultMessageState;
        try{           
            const resp = await axios.get(`/api/admin/post-details/${postId}`);
            const [ postDetails ] = resp.data;
            const titleUrl = formatUrl(postDetails);
            let editFormState = postDetails;
            this.history.push(`/edit-post/${titleUrl}`, editFormState);   
        }
        catch (error){
            console.log("Error getting post details.", error);
            this.history.push('/result-message', resultMessageState);
        } 
    }

    render(){
        const postData = this.state.posts;
        
        if(!postData){
            return(
                <PleaseWait mainHistory = {this.history} text="Edit Post" />
            ); 
        }
        const postList = postData.map((post,index) => {
            return(
                <ListItem 
                    key={index}
                    {...post}
                    onClick={this.goToDetails.bind(this, post.postId)}
                />
            )
        });
        return(
            <div className='section-container center'>
                <AdminHeader mainHistory={this.history}/>
                <NavButton text="Edit Post" buttonClasses="title center" onClick="null" />
                <div className="xlrg-flx-container center-margins flex-left">
                        <h4 className="h4">Select Post</h4>
                </div>
                <div className="green-space">
                    {postList}                                  
                </div>
                <div className="xlrg-flx-container center-margins flex-right">
                    <NavButton buttonClasses='small-button' text='Return' url='/' mainHistory={this.history}/>
                </div>
            </div>
        );
    }
}

export default EditList;

