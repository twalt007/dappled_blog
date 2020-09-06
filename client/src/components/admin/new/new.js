import React, { Component } from 'react'
import AdminHeader from '../general/header/adminHeader'
import NavButton from '../../general/navButton'
import { Field, FormButton, Textarea } from '../general/form/formComponents'
import * as yup from 'yup'
import axios from 'axios'
import '../general/form/form.scss'

class NewPost extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: {},
            errors: {},
            initVal: {},
            buttonDisabled: "submit",
            formDisabled: false
        }

        
        this.imageFormats = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
        this.validSchema = {
            postTitle: yup.string()
            .required('Please provide a title. Don\'t forget to name your latest brainchild!')
            .max(60,'Title too long; will not fit on tile.  Please limit to 60 characters.')
            .trim(),
            postContent: yup.string()
            .required('Please provide content. Your audience awaits!')
            .trim(),
            postQuote: yup.string()
            .required('Please provide a quote to spark readers\' interest - preferably something witty.')
            .max(255,'Sorry - too long!  There is a difference between a quote and a post you know!')
            .trim()
        }
            



        this.imageErrorMessage = 'Don\'t forget an image!  Its worth 1,000 words of post you know!'

        this.reroute = this.reroute.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.validateField = this.validateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeBlur = this.handleChangeBlur.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }        

    reroute(){
        this.props.history.goBack();
    };

    async validateForm(){
        const data = {...this.state};
        const schema = yup.object().shape(this.validSchema);
        let errors = {};
        await schema.validate(this.state.data, {abortEarly:false}).catch(errs => {
            errs.inner.map(err=>{ errors[err.path] = err.message; });            
        });
        return errors;
    };

    async validateField({name, value }){
        // if (name === 'postImage' && !this.state.postImage){
        //     return this.imageErrorMessage;
        // }
        const schema = yup.object().shape({ [name]: this.validSchema[name] });
        let obj = {[name]:value};
        let errorMessage = await schema.validate(obj).catch(errs => errs);
        console.log('errorMesage',errorMessage);
        if (errorMessage.message) {
            return errorMessage.message
        } else return null;
    };

    async handleSubmit(e){
        e.preventDefault();

        let allErrors = await this.validateForm();
        this.setState({errors : allErrors });

        if (Object.keys(allErrors).length !== 0)return;
        this.submitForm(this.state.data);
    };

    async handleChangeBlur({target: input}){
        const errors = {...this.state.errors};

        let errorMessage = await this.validateField(input);
        if (errorMessage) errors[input.name] = errorMessage;
        // if (name === 'postImage' && !this.state.postImage) errors[input.name] = this.imageErrorMessage;
        else {
            delete errors[input.name];
            let allErrors = await this.validateForm();
            if (Object.keys(allErrors).length == 0) this.setState({ buttonDisabled : false });
        };  

        const data = { ...this.state.data };
        if (input.files){ 
            data[input.name] = input.files[0]
        } else {
            data[input.name] = input.value;
        };
        this.setState({ data, errors })        
    };

    submitForm = async(values) => {
        this.setState({ buttonDisabled: "both", formDisabled: true });
        
        const {history, userId='a9ec5c8d-455a-11ea-8fd0-a4db300c2566'} = this.props;
        const data = {
            userId: userId,
            postText: values,
            postImage: image
        }
        
        let resultMessageState;
        try{
            const resp = await axios.post(`/api/admin/new-post`, data);
            if (resp.data.code===200) {
                resultMessageState = 'success'
            }
            history.push('/result-message', resultMessageState);
            return;
        }
        catch (error){
            console.log("Error submitting content to be posted. ", error);
            history.push('/result-message');
        }            
    }

    render(){
        let oCB = this.handleChangeBlur;
        let err = this.state.errors;
        let { buttonDisabled, formDisabled } = this.state;
        return (
            <div className="admin admin-background section-container center">
                <div className="admin-background">
                    <AdminHeader mainHistory={this.props.history}/>
                    <NavButton text="Create New Post" buttonClasses = "title" onClick="null"/>
                    <form className="form" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                        <Field name='postTitle' label="Post Title" max="60" error={err} onChange={oCB} onBlur={oCB} disabled={formDisabled}/>
                        <Textarea name="postContent" label="Post Content" error={err} onChange={oCB} onBlur={oCB} disabled={formDisabled}/>
                        <Field name="postQuote" label="Post Quote" error={err} onChange={oCB} onBlur={oCB} disabled={formDisabled}/>
                        <Field name="postImage" label="Post Image" type="file" accept="image/*" error={err} onChange={oCB} onBlur={oCB} disabled={formDisabled}/> 
                        <FormButton text="Post" onClick={this.validateForm} reroute={this.reroute} buttonClass={this.state.buttonClass} disabled={buttonDisabled}/>
                    </form>
                    <div className="bottom-space"></div>
                </div>
            </div>
        )
    };
}

export default NewPost;



//will need to add in error handling on form + relevant styling for image
//need to update edit post portion
//add preview area for image on admin side
//style the choose file button





//preview:
//https://www.cluemediator.com/image-upload-in-reactjs
{/* <p className="title" style={{ marginTop: 30 }}>Uploaded Image:</p>
        {imageUrl && <img src={imageUrl} alt="Uploaded File" height="100" width="100" />} */}  //imageURL coming from state

//test image upload with formik based on: https://github.com/formium/formik/issues/926
//https://hackernoon.com/formik-handling-files-and-recaptcha-209cbeae10bc
//https://www.thetopsites.net/article/54020719.shtml


//validation:
// postImage: yup.mixed()
            // .nullable()
            // .test('fileSize', "File Size is too large", value => value.size <= this.fileSize)
            // .test('fileType', "Unsupported File Format", value => this.imageFormats.includes(value.type))
            // postImage: yup.mixed().shape({
            //     name: yup.string().required('Don\'t forget an image!  Its worth 1,000 words of post you know!')
            //   })
        }

        // params:
        // label: "File"
        // originalValue: "C:\fakepath\20191016_094222_flipped.jpg"
        // path: "File"
        // type: "object"
        // value: null