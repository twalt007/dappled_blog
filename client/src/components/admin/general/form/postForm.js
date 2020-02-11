import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import NavButton from '../navButton'

//Formik own component
    // have the initialValues be variable 
    //for basic stuff, fine to use typical variable
    //have a helper function that we can call elsewhere that will do the Api call
//validation Schema object pass in


// passed in: startingValues = {postTitle:'', postContent: '', postQuote: ''}
// const { startingValues, schema, obSubmitFunction } = props;


const PostForm = (props) => {
    const {initialValues, text, mainHistory} = props;
    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={Yup.object({
                postTitle: Yup.string()
                    .required('Please provide a title. Don\'t forget to name your latest brainchild!')
                    .max(60,'Title too long; will not fit on tile.  Please limit to 60 characters.'),
                postContent: Yup.string()
                    .required('Please provide content. You\'ve got readers chomping at the bit to see what you have to say - c\'mon, thow them a bone!'),
                postQuote: Yup.string()
                    .required('Please provide a quote to spark readers\' interest - preferably something witty.')
                    .max(255,'Sorry - too long!  There is a difference between a quote and a post you know!')
            })}
            onSubmit = {(values, {setSubmitting})=>{
                //run Api call to send this back to our server and trigger our success page;
                //may need an 'await'
                setSubmitting(false);
            }}
        >
            <Form className="form">
                <label className="form-label" htmlFor="postTitle">Post Title</label>
                <Field className="fat-border form-input" name="postTitle" type="text" />
                <ErrorMessage className="form-error" name="postTitle" />
                <label className="form-label" htmlFor="postContent">Post Content</label>
                <Field className="fat-border form-textarea" name="postContent" type="text" component="textarea" />
                <ErrorMessage className="form-error" name="postContent" />
                <label className="form-label" htmlFor="postQuote">Post Quote</label>
                <Field className="fat-border form-input" name="postQuote" type="text" />
                <ErrorMessage className="form-error" name="postQuote" />
                <div className="flexed">
                    <NavButton buttonClasses='small-button left' text='Return' url='/' mainHistory={mainHistory}/>
                    <NavButton buttonClasses='small-button' type='submit' text={text} url='home' mainHistory={mainHistory}/>
                </div>
            </Form>
        </Formik>
    )
}

export default PostForm;
