import React from 'react';
import '../assets/css/app.scss';
import { Route } from 'react-router-dom'
import AdminHome from './admin/home'
import New from './admin/new'
import EditList from './admin/edit/editList'
import EditPost from './admin/edit/editPost'
import DeleteList from './admin/delete/deleteList'
import DeletePost from './admin/delete/deletePost'
import Success from './admin/success'
import BlogHome from './blog/home'
import PostContent from './blog/post/postContent';
import Failure from './blog/failure'

const App = () => (
    <div className="app">
        <Route path="/" exact component={AdminHome} />
        <Route path="/new" component={New} />
        <Route path="/edit" component={EditList} />
        <Route path="/edit-post/:postTitle" component={EditPost} />
        <Route path="/delete" component={DeleteList} />
        <Route path="/delete-post/:postTitle" component={DeletePost} />
        <Route path="/result-message" component={Success} />
        <Route path="/home" component={BlogHome} />
        <Route path="/post/:postTitle" component={PostContent} />
        <Route path="/error-retrieving-content" component={Failure} />
    </div>
);

export default App;


