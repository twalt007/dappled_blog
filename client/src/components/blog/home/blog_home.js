import React, { Component } from 'react';
import BlogHeader from '../general/header'
import BlogFooter from '../general/footer'
import { titleUrl } from '../../general/helpers'


class BlogHome extends Component{
    constructor(props){
        super(props);

        this.state={
            posts: [],
        }

        this.history = props.history;
    }
     
    componentDidMount= async()=>{
        const {userId = 'a9ec5c8d-455a-11ea-8fd0-a4db300c2566'} = this.props;
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
            this.history.push(`/post/${titleUrl}`, editFormState);   
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
                <div className='section-container'>
                    <BlogHeader mainHistory={this.history} text="Dappled"/>
                    <div className="welcome-text green-space">
                        <h1 className="h1 text center">Welcome to Dappled! We're busy getting your content.</h1>
                        <h2 className="h2 please-wait">Please take this wait as an opportunity to relax and practice being fully present</h2>
                    </div>
                </div>
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
            <div className = "section-container">
                <BlogHeader mainHistory={this.history} text="Dappled"/>
                <div className="welcome-text green-space">
                    <h1 className="h1 text center">Welcome to Dappled!</h1>
                </div>
                
                <div className="post-list flexed">
                    <div> I'm a Post</div>
                    <div> I'm a Post</div>
                    <div> I'm a Post</div>
                    {/* {postList} */}
                </div>
                <BlogFooter mainHistory={history}/>
            </div>
        );
    }
}

export default BlogHome;

