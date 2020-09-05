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
            focused: null,
        }

        //need way to show which ref referencing.  can do this.[name] = createRef();, 
        //but how will componentDidMount know?
        //could always have componentDid Mount reference another function, this function could test to see 

        //could pass a 'last refernced' something into state, and see if that is focused.  

        this.currentRef = null;
        this.postTitleRef = React.createRef();
        this.postContentRef = React.createRef();
        this.postQuoteRef = React.createRef();
        this.cursor = {};

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
        this.handleFocus = this.handleFocus.bind(this);
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
        if(this.currentRef){
            switch(this.currentRef){
                case 'postTitle':
                    this.postTitleRef.current.setSelectionRange(this.cursor.postTitle, this.cursor.postTitle);
                    break;
                case 'postContent':
                    this.postContentRef.current.setSelectionRange(this.cursor.postContent, this.cursor.postContent);
                    break;
                case 'postQuote':
                    this.postQuoteRef.current.setSelectionRange(this.cursor.postQuote, this.cursor.postQuote);
                    break;
            }
        }        
    }
    handleFocus(e, name){
        if(e){
            this.setState({focused: name})
            switch(name){
                case 'postTitle':
                    if (this.cursor.postTitle){
                        this.postTitleRef.current.setSelectionRange(this.cursor, this.cursor);
                    } else {
                        this.cursor.name = e.currentTarget.selectionStart;
                    }
                    break;
                case 'postContent':
                    if (this.cursor.postContent){
                        this.postContentRef.current.setSelectionRange(this.cursor, this.cursor);
                    } else {
                        this.cursor.name = e.currentTarget.selectionStart;
                    }
                    break;
                case 'postQuote':
                    if (this.cursor.postQuote){
                        this.postQuoteRef.current.setSelectionRange(this.cursor, this.cursor);
                    } else {
                        this.cursor.name = e.currentTarget.selectionStart;
                    }
                    break;
            }
        }        
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
        const {name, value} = e.currentTarget;

        this.cursor[name] = e.currentTarget.selectionStart;
        this.currentRef = name;

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
        let oC = this.handleChange;
        let { errors, buttonDisabled, formDisabled } = this.state;
        let {postTitle, postContent, postQuote } = this.state.data;
        return (
             <div className="admin admin-background section-container center">
                <div className="admin-background">
                    <AdminHeader mainHistory={this.props.history}/>
                    <NavButton text="Edit Post" buttonClasses = "title" onClick="null"/>
                    <form className="form" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                        <Field name='postTitle' label="Post Title" max="60" value={postTitle} error={errors} ref={this.postTitleRef} onChange={oC} onBlur={oC} disabled={formDisabled}/>
                        <Textarea name="postContent" label="Post Content" value={postContent} error={errors} ref={this.postContentRef} onChange={oC} onBlur={oC} disabled={formDisabled}/>
                        <Field name="postQuote" label="Post Quote" value={postQuote} error={errors} ref={this.postQuoteRef} onChange={oC} onBlur={oC} disabled={formDisabled}/>
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




