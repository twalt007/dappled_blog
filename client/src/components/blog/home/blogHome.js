import React, { Component } from 'react'
import BlogHeader from '../general/header'
import BlogFooter from '../general/footer'
import PostTile from '../general/postTile'
import axios from 'axios'
import { formatUrl } from '../../general/helpers'



// need to make the blog post page
// need to clean up my css


class BlogHome extends Component{
    constructor(props){
        super(props);

        this.state={
            posts: null,
            name: "Dappled"
        }

        this.history = props.history;
    }
     
    componentDidMount= async()=>{
        const {userId = 'a9ec5c8d-455a-11ea-8fd0-a4db300c2566'} = this.props;
        try{  
            const resp = await axios.get(`/api/admin/post-list/${userId}`);
            const returnedPosts = resp.data;
            console.log("axios call data post-list: ", returnedPosts);
            this.setState({
                posts: returnedPosts
            })
        }
        catch (error){
            console.log("Error getting list of posts.", error);
            this.history.push('/error-retrieving-content', this.state.text );
        }  
    }
    goToDetails = async(postId) => {
        console.log("inside goToDetails for Blog_home");
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
                    <BlogHeader mainHistory={this.history} name={name}/>
                    <div className="welcome-text green-space">
                        <h1 className="h1 text center">Welcome to Dappled! </h1>
                        <h1 className="h1 text center">We're busy getting your content.</h1>                        
                        <h2 className="h2 please-wait">Please take this wait as an opportunity to relax and practice being fully present</h2>
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
            <div className = "section-container">
                <BlogHeader mainHistory={this.history} name={name}/>
                <div className="welcome-text green-space">
                    <h1 className="h1 text center">Welcome to Dappled!</h1>
                </div>
                
                <div className="post-list flexed">
                    {postList}
                </div>
                <BlogFooter mainHistory={history} name={name}/>
            </div>
        );
    }
}

export default BlogHome;

