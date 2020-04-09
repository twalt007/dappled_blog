import React, { Component } from 'react';
import { Field, FormButton } from './formComponents'
import * as Yup from 'yup';
import './form.scss'


class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: {},
            errors: {}
        }
        this.reroute = this.reroute.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.validateField = this.validateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    reroute(){
        mainHistory.push(returnUrl);
    };

    validateForm(){
        console.log("testing validation function");
        if (!error) {
            return null;
        }
        //something to push error messages to variable
        return errors
    };
    
    validateField(){
        console.log("testing validate property function");
    };

    handleSubmit(e){
        e.preventDefault();
        console.log("testing submit functionality");
    };

    handleChange(e){
        const { value } = e.currentTarget;
        console.log("inside onchange event, e props", value);

    };

    render (){
        const { initialValues, text= 'ok', mainHistory, returnUrl= '/', reroute} = this.props //handleSubmit 
        console.log("this.props.children", this.props.children);
        return(
            <form className="form" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                {this.props.children}
            </form>
        )
        
    }        
}


export default Form;

//{React.cloneElement(this.props.children, {...this.props})}