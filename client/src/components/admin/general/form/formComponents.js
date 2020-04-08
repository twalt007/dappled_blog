import React from "react";

//do I need to diable validate function on my submit button?  do I need to add a name to th submit button for the error?

export const Field = ({
    name, label, type, value, error, onChange, 
    divClass="input-group", 
    labelClass="form-label", 
    fieldClass="fat-border form-input", 
    errorClass="form-error", 
    id=null
    }) => {
        
    if (fieldClass==="textarea"){ fieldClass="fat-border form-textarea"};
    return (
        <div className = {divClass}>
            <label className= {labelClass} htmlFor={name}>{label}</label>
            <input 
                className={fieldClass} 
                name={name} 
                type={type} 
                value={value} 
                onChange={onChange}
                id={id}
            />
            {error && <div className={errorClass} name={name}>{error}</div>}
        </div>
    )
}

export const FormButton = ({
    text, returnText, error, reroute,
    componentDivClass="xlrg-flx-container flex-right", 
    groupDivClass="lrg-container align-right top-space", 
    divClass='small-button fat-border after-space', 
    buttonClass='text small-button fat-border', 
    errorClass="form-error", id=null
    }) => {
        
    return (
        <div className={componentDivClass}>
            <div className={groupDivClass}>
                <div className ={divClass} onClick={reroute} role="button">{returnText}</div>                
                <button className={buttonClass} type='submit'>{text}</button>
            </div>
            {error && <div className={errorClass} >{error}</div>}
        </div>
    )
}