import React from 'react';
import '../assets/css/app.scss';
import { Route } from 'react-router-dom'
import AdminHome from './admin/home'
import New from './admin/new'
import Edit from './admin/edit'
import Delete from './admin/delete'
import Success from './admin/success'
import PublicHome from './public/home'
import Post from './public/post'

const App = () => (
    <div className="app">
        <Route path="/" exact component={AdminHome} />
        <Route path="/new" component={New} />
        <Route path="/edit" component={Edit} />
        <Route path="/delete" component={Delete} />
        <Route path="/success" component={Success} />
        <Route path="/home" component={PublicHome} />
        <Route path="/post" component={Post} />
    </div>
);

export default App;
