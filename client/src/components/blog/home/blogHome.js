import React, { Component } from 'react'
import BlogHeader from '../general/header'
import BlogFooter from '../general/footer'
import PostTile from '../general/postTile'
import NavButton from '../../general/navButton'
import axios from 'axios'
import { formatUrl } from '../../general/helpers'


class BlogHome extends Component{
    constructor(props){
        super(props);

        this.state={
            posts: null,
        }

        this.history = props.history;
    }
     
    componentDidMount= async()=>{
        const {userId = 'a9ec5c8d-455a-11ea-8fd0-a4db300c2566'} = this.props;
        try{  
            const resp = await axios.get(`/api/admin/post-list/${userId}`);
            const returnedPosts = resp.data;
            this.setState({
                posts: returnedPosts
            });
        }
        catch (error){
            console.log("Error getting list of posts.", error);
            this.history.push('/error-retrieving-content');
        }  
    }
    goToDetails = async(postId) => {
        try{           
            const resp = await axios.get(`/api/admin/post-details/${postId}`);
            const [ postDetails ] = resp.data;
            const titleUrl = formatUrl(postDetails);
            let editFormState = postDetails;
            this.history.push(`/post/${titleUrl}`, editFormState);   
        }
        catch (error){
            console.log("Error getting post details.", error);
            this.history.push('/error-retrieving-content');
        } 
    }

    render(){
        const postData = this.state.posts;
        const { name } = this.state;
        if(!postData){
            return(
                <div className='section-container'>
                    <BlogHeader mainHistory={this.history} />
                    <div className="welcome-text blog-green-space center">
                        <div className="tile-container">
                            <h2 className="text">Welcome to Dappled! </h2>
                            <h4 className="text top-space">We're busy getting your content.</h4>                        
                            <h4 className="text please-wait">Please take this wait as an opportunity to relax and practice being fully present.</h4>
                        </div>
                    </div>
                </div>
            ); 
        }

        const postList = postData.map((post,index) => {
            return(
                <PostTile 
                    key={index}
                    {...post}
                    onClick={this.goToDetails.bind(this, post.postId)}
                />
            )
        });
        return(
                <div className = "blog client-container blog-container">
                    <BlogHeader mainHistory={this.history}/>
                    <div className="welcome-text blog-green-space">
                        <h1 className="text center">Welcome to Dappled! </h1>
                        <br></br>
                        <h3 className="text center">Take a walk down memory lane - these are the things that have built you into you.</h3>
                        <h3 className="text center">Don't underestimate their value.</h3>
                    </div>                
                    <div className="tile-list center-margins">
                        {postList}
                    </div>
                    <div className="xlrg-flx-container center-margins flex-right">
                        <NavButton buttonClasses='small-button left' text='Back to Admin' goBack={null} url='/' mainHistory={this.history}/>
                    </div>
                    <BlogFooter mainHistory={this.history} name={name}/>
                </div>
        );
    }
}

export default BlogHome;

