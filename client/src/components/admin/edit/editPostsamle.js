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
            formDisabled: false,
            refs: {}
        }

        this.myRef = React.createRef();
        this.cursor;

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
        this.setState({data});
    }
    componentDidUpdate(){
        console.log("this.curosr in componentDidUpdate: ", this.cursor);
        console.log("componentDidUpdate checking Ref Name: ", this.myRef);
        let { value } = this.myRef.current;
        console.log("value: ", value);
        this.myRef.current.focus();
        this.myRef.current.setSelectionRange(this.cursor, this.cursor);
    }
    reroute(){
        this.props.history.goBack();
    };
    async validateForm(){
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

    async handleChange(e){    
        console.log("this.myRef: ", this.myRef);
        console.log("this.myRef.current: ", this.myRef.current);
        console.log("this.myRef.current.name: ", this.myRef.current.name);
        console.log("e.currentTarget.selectionStart: ", e.currentTarget.selectionStart);
        this.cursor = e.currentTarget.selectionStart;
        console.log("this.curosr in componentDidMount: ", this.cursor);

//access where cursor currently is
//save into a variable
//at end have it display again.  how does this work with refs again??
//need to have it save and be referenced also for onFocus
//after basic working, add in the array portion, so that have different refs created to tarck differet inputs

        const {name, value} = e.currentTarget;
        const errors = {...this.state.errors};

        let errorMessage = await this.validateField(e.currentTarget);
        if (errorMessage) errors[name] = errorMessage;
        else {
            delete errors[name];
            let allErrors = await this.validateForm();
            if (Object.keys(allErrors).length == 0) this.setState({ buttonDisabled : false });
        };  

        const data = { ...this.state.data };

        data[name] = value;
        this.setState({ data, errors});
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
        console.log("rendering:", this.state);
        let oC = this.handleChange;
        let oF = this.handleFocus;
        let { errors, buttonDisabled, formDisabled } = this.state;
        let {postTitle, postContent, postQuote } = this.state.data;
        return (
             <div className="admin admin-background section-container center">
                <div className="admin-background">
                    <AdminHeader mainHistory={this.props.history}/>
                    <NavButton text="Edit Post" buttonClasses = "title" onClick="null"/>
                    <form className="form" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                        <Field name='postTitle' label="Post Title" max="60" value={postTitle} error={errors} ref={this.myRef} onChange={oC} onBlur={oC} onFocus={oF} disabled={formDisabled}/>
                        <Textarea name="postContent" label="Post Content" value={postContent} error={errors} ref={this.myRef} onChange={oC} onBlur={oC} onFocus={oF} disabled={formDisabled}/>
                        <Field name="postQuote" label="Post Quote" value={postQuote} error={errors} ref={this.myRef} onChange={oC} onBlur={oC} onFocus={oF} disabled={formDisabled}/>
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