import React from 'react';
import { Field, FormButton } from './formComponents'
import * as Yup from 'yup';
import './postForm.scss'


const PostForm = (props) => {
    const {initialValues, text='Ok', mainHistory, returnUrl='/'} = props;  //handleSubmit
    function reroute(){
        mainHistory.push(returnUrl);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("testing submit functionality");
    }

    return (
       <form className="form" encType="multipart/form-data" onSubmit={handleSubmit}>
            <Field name="testingDefault" label="Testing Default" type="text" />
            <Field name="testingTextArea" label="testing Text Area" type="text" fieldClass="textarea" />
            <Field name="testingOverridingStyle" label="testing Overriding style" type="text" labelClass="new-label-class" divClass="new-div-class" id="new-id" />
            <Field name="testingImage" label="testingimage" type="file" />
            <FormButton returnText="ReturnTest" text={text} reroute={reroute}/>
        </form>
    )
}


export default PostForm;

//remove ids
//create new componenet for file input


// import React, { Component } from 'react';
// import * as Yup from 'yup';
// import './postForm.scss'

// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }


// class PostForm extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             data: {},
//             errors: {}
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e){
//         this.setState({
//             data: event.target.value
//         });
//     }

//     handleSubmit(e) {
//         //do work
//         e.prevenntDefault();
//     }

//     reroute(){mainHistory.push(returnnUrl)};

//     render() {
//         const {initialValues, text='Ok', mainHistory, handleSubmit, returnUrl='/'} = props;

//     }
// }(props) => {
//     function reroute(){
//         mainHistory.push(returnUrl);
//     }
//     return (
//         <Formik 
//             initialValues={initialValues}
            
//             validationSchema={Yup.object({
//                 postTitle: Yup.string()
//                     .required('Please provide a title. Don\'t forget to name your latest brainchild!')
//                     .max(60,'Title too long; will not fit on tile.  Please limit to 60 characters.'),
//                 postContent: Yup.string()
//                     .required('Please provide content. You\'ve got readers chomping at the bit to see what you have to say - c\'mon, thow them a bone!'),
//                 postQuote: Yup.string()
//                     .required('Please provide a quote to spark readers\' interest - preferably something witty.')
//                     .max(255,'Sorry - too long!  There is a difference between a quote and a post you know!'),
//                 postImage: Yup.mixed('Unsupported file type loaded. Please double check!')               
//             })}
            
//             onSubmit = {(values, {setSubmitting})=>{
//                 handleSubmit(values);
//                 setSubmitting(false);
//             }}
//         >
//             <Form className="form" encType="multipart/form-data">
//                 <label className="form-label" htmlFor="postTitle">Post Title</label>
//                 <Field className="fat-border form-input" name="postTitle" type="text" />
//                 <ErrorMessage className="form-error" name="postTitle" />
//                 <label className="form-label" htmlFor="postContent">Post Content</label>
//                 <Field className="fat-border form-textarea" name="postContent" type="text" component="textarea" />
//                 <ErrorMessage className="form-error" name="postContent" />
//                 <label className="form-label" htmlFor="postQuote">Post Quote</label>
//                 <Field className="fat-border form-input" name="postQuote" type="text" />
//                 <ErrorMessage className="form-error" name="postQuote" />
//                 <label className="form-label" htmlFor="postImage">Upload Image</label>
//                 <Field className="fat-border form-input" id="postImage" name="postImage" type="file" accept="image/*"></Field>
//                 <ErrorMessage className="form-error" name="postImage" />
//                 <div className="xlrg-flx-container flex-right">
//                     <div className="lrg-container align-right top-space">
//                         <div className = 'small-button fat-border after-space' onClick={reroute}>Return</div>                
//                         <button className='text small-button fat-border' type='submit'>{text}</button>
//                     </div>
//                 </div>
//             </Form>
//         </Formik>
//     )
// }


// export default PostForm;




//just trying to see what types of things are needed to make this form work.

//trying to allow the pieces to still be able to recieve the stuff they will need - inputs should be able to recieve all  initial values
//think goal will just be to create a basic form that works
//after that, when undersatnd it better, can look into ways to tweak it so that I don't hvae to recode it all over again for the u-auth system
//wtrying to see if I can get rid of the reroute function, and have it still work in my navbutton pieces, as well as here

//basic needed pieces:

// handleChange   
//     setState
// handleSubmit
//     prevent default
//     validate
//         stop with one error/validate on unfocus
//     make axios call or whatever I do

// submit button grey until no errors
// can't have more than one error show, unless for logins

//meta touched && ...
//reset props??