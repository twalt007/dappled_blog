import React from "react";

export const Field = ({
    name, label, onChange, onBlur, value, initVal, error, accept, max, min,
    rows='15',
    disabled=false,
    type="text",
    divClass="input-group", 
    labelClass="form-label", 
    fieldClass="fat-border form-input", 
    errorClass="form-error", 
    id=null,
    onClick=null
    }) => {
        
    if (fieldClass==="textarea"){ fieldClass="fat-border form-textarea"};

    if (!value && initVal) {
        value=initVal[name];
    }

    let errorMessage = ' ';
    if (error){
        errorMessage = error[name];
    };

    if (disabled){
        divClass=`${divClass} disabled`, 
        labelClass=`${labelClass} disabled`, 
        fieldClass=`${fieldClass} disabled`
    };

    return (
        <div className = {divClass}>
            <label className= {labelClass} htmlFor={name}>{label}</label>
            <input 
                className={fieldClass} 
                name={name} 
                type={type} 
                accept={accept}
                value={value} 
                onChange={onChange}
                onBlur={onBlur}
                onClick={onClick}
                id={id}
                maxLength={max}
                minLength={min}
                rows={rows}
            />
            <div className={errorClass} name={name}>{errorMessage}</div>
        </div>
    )
}

export const FormButton = ({
    text, error, reroute, onClick, 
    disabled='submit',
    type="submit",
    returnText="Return",
    componentDivClass="xlrg-flx-container flex-right", 
    groupDivClass="lrg-container align-right top-space", 
    divClass='small-button fat-border after-space', 
    buttonClass='text small-button fat-border', 
    errorClass="form-error", 
    id=null,
    }) => {
    
    if (disabled === 'submit'){
        divClass= divClass, 
        buttonClass=`${buttonClass} disabled` 
    }
    if (disabled === 'both') {
        divClass=`${divClass} disabled`, 
        buttonClass=`${buttonClass} disabled` 
    }

    return (
        <div className={componentDivClass}>
            <div className={groupDivClass}>
                <div className ={divClass} onClick={reroute} role="button">{returnText}</div>                
                <button className={buttonClass} type={type} onClick={onClick}>{text}</button>
            </div>
            {error && <div className={errorClass} >{error}</div>}
        </div>
    )
}

