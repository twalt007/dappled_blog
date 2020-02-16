import React from 'react';
import '../assets/css/app.scss';
import { Route } from 'react-router-dom'
import AdminHome from './admin/home'
import New from './admin/new'
import EditList from './admin/edit/editList'
import EditPost from './admin/edit/editPost'
import Delete from './admin/delete'
import Success from './admin/success'
import PublicHome from './blog/home'
import Post from './blog/post'

const App = () => (
    <div className="app">
        <Route path="/" exact component={AdminHome} />
        <Route path="/new" component={New} />
        <Route path="/edit" component={EditList} />
        <Route path="/edit-post/:postTitle" component={EditPost} />
        <Route path="/delete" component={Delete} />
        <Route path="/result-message" component={Success} />
        <Route path="/home" component={PublicHome} />
        <Route path="/post" component={Post} />
    </div>
);

export default App;



// if( url ='/' || "/new" || "/edit" || "/delete" || "/success" ){
//     return (
//         <div className="app">
//             <AdminHeader />
//             <Route path="/" exact component={AdminHome} />
//             <Route path="/new" component={New} />
//             <Route path="/edit" component={Edit} />
//             <Route path="/delete" component={Delete} />
//             <Route path="/success" component={Success} />
//             <Route path="/home" component={PublicHome} />
//             <Route path="/post" component={Post} />
//         </div>
//     )
// }
// else {
//     return (
//         <div className="app">
//             <Route path="/home" component={PublicHome} />
//             <Route path="/post" component={Post} />
//         </div>
//     )
// }

// };
