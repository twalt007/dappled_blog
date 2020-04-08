import React from 'react'
import AdminHeader from '../general/header/adminHeader'
import NavButton from '../../general/navButton'
import Form from '../general/form'
import { Field, FormButton } from '../general/form/formComponents'
import axios from 'axios';

class NewPost extends Form(){
    constructor(props){
        super(props);

        this.state={
            data: {},
            errors:{},
        }

        this.history = props.history;
        this.handleSubmit = this.handleSumbit.bind(this);

    }

    handleSubmit = async(values) => {
        const {userId='a9ec5c8d-455a-11ea-8fd0-a4db300c2566'} = this.props;
        console.log("inside handleSubmit");
        // const data = {
        //     userId: userId,
        //     post: {
        //         postType: values.postType,
        //         contentType: values.contentType,
        //         postTitle: values.postTitle,
        //         postContent: values.postContent,
        //         postQuote: values.postQuote,
        //     }
        // }
        // console.log("handleSubmit new post data: ", data);
        // let resultMessageState;
        // try{
        //     const resp = await axios.post(`/api/admin/new-post`, data);
        //     console.log("hanleSubmit resp from axios call: ", resp);
        //     if (resp.data.code===200){
        //         resultMessageState = 'success';         
        //     }
        //     history.push('/result-message', resultMessageState);
        //     return;
        // }
        // catch (error){
        //     console.log("Error submitting content to be posted. ", error);
        //     history.push('/result-message');
        // }   
    };
    
   render(){
       return(
            <div className="admin section-container center">
                <div className="admin-background">
                    <AdminHeader mainHistory={history}/>
                    <NavButton text="Create New Post" buttonClasses = "title" onClick="null"/>
                    {/* should go below  mainHistory={history} initialValues={initialValues}*/}
                    <form handleSubmit={this.handleSubmit} >  
                        <Field name="testingDefault" label="Testing Default" />,
                        <Field name="testingTextArea" label="testing Text Area" fieldClass="textarea" />
                        <Field name="testingOnChange" label="testing On Change" onChange={this.handleChange} />
                        <Field name="testingImage" label="testingimage" type="file" /> */} 
                        {/* <FormButton returnText="Return" text="Post" reroute={this.reroute}/>  */}
                    </form>
                    {/* <PostForm handleSubmit={handleSubmit} mainHistory={history} text="Post" initialValues={initialValues}/> */}
                    <div className="bottom-space"></div>
                </div>
            </div>
       );
    };
}

export default NewPost;