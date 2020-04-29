import React, {Component} from 'react'
import AdminHeader from '../general/header/adminHeader'
import NavButton from '../../general/navButton'
import { Field, FormButton, Textarea } from '../general/form/formComponents'
import * as yup from 'yup'
import axios from 'axios'
import '../general/form/form.scss'


class EditPost extends Component {
    constructor (props){
        super(props);
        
        this.state = {
            postId: props.history.location.state.id,
            data: {
                postTitle: 'Please name your soon-to-be brain child',
                postContent: 'Now write a great work of genius!',
                postQuote: 'Say something pithy for people to quote'
            },
            errors: {},
            buttonDisabled: false,
            formDisabled: false
        }

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

        this.reroute = this.reroute.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.validateField = this.validateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount(){
        let data = {
            postTitle: this.props.history.location.state.postTitle,
            postContent: this.props.history.location.state.postContent,
            postQuote: this.props.history.location.state.postQuote
        }
        this.setState({data})
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
        const schema = yup.object().shape({ [name]: this.validSchema[name] });
        let obj = {[name]:value};
        let errorMessage = await schema.validate(obj).catch(errs => errs);
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

    async handleChange({currentTarget: input}){
        const {name, value} = input;
        const errors = {...this.state.errors};
        let errorMessage = await this.validateField(input);
        if (errorMessage) errors[name] = errorMessage;
        else {
            delete errors[name];
            let allErrors = await this.validateForm();
            if (Object.keys(allErrors).length == 0) this.setState({ buttonDisabled : false });
        };  

        const data = { ...this.state.data };
        if(data.name){

        }
        data[name] = value;
        this.setState({ data, errors })  
    };

    submitForm = async(values) => {
        this.setState({ buttonDisabled: "both", formDisabled: true });
        
        const data = {
            post: {
                id: this.state.postId,
                ...values
            }
        }
        let resultMessageState;
        try{
            const resp = await axios.patch(`/api/admin/post-details/${this.state.postId}`, data);
            if (resp.status===200){
                resultMessageState = 'success';         
            }
            this.props.history.push('/result-message', resultMessageState);
            return;
        }
        catch (error){
            console.log("Error submitting content to be posted. ", error);
            this.props.history.push('/result-message');
        }      
    }

    render(){
        let oC = this.handleChange;
        let { errors, buttonDisabled, formDisabled } = this.state;
        let {postTitle, postContent, postQuote } = this.state.data;
        return (
             <div className="admin admin-background section-container center">
                <div className="admin-background">
                    <AdminHeader mainHistory={this.props.history}/>
                    <NavButton text="Edit Post" buttonClasses = "title" onClick="null"/>
                    <form className="form" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                        <Field name='postTitle' label="Post Title" max="60" value={postTitle} error={errors} onChange={oC} onBlur={oC} disabled={formDisabled}/>
                        <Textarea name="postContent" label="Post Content" value={postContent} error={errors} onChange={oC} onBlur={oC} disabled={formDisabled}/>
                        <Field name="postQuote" label="Post Quote" value={postQuote} error={errors} onChange={oC} onBlur={oC} disabled={formDisabled}/>
                        {/* <Field name="postImage" label="Post Image" type="file" accept="image/*" error={err} onChange={oC} onBlur={oC} disabled={formDisabled}/>  */}
                        <FormButton text="Update" onClick={this.validateForm} reroute={this.reroute} buttonClass={this.state.buttonClass} disabled={buttonDisabled}/>
                    </form>
                    <div className="bottom-space"></div>
                </div>
            </div>
        )
    }
}

export default EditPost;