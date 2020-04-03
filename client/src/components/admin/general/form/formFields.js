import React from "react";

//need to have logic so that error message appears when there is an error for this input
//error will likely be its own coponent imported in here
//will need to have validation push an error to this input's props, which will give it to the message
//if error has a message, it will render.  if not, then won't render
//see react forms for more on doncitional rendering.  rework this once have errors console logging, etc.

//is it possible to <input {className} {name} {type} ></input>   ??
//could I define my classes outside, just once withou having to have them repeat and clog the
const defineStyles = ({...styles}) =>{
    let {divClass="input-group", labelClass="form-label", inputClass, errorClass="form-error", id=null} = styles;
    if (!inputClass) {
        inputClass="fat-border form-input"
    } else if (inputClass==="textArea"){
        inputClass="fat-border form-textarea"
    };
    return {divClass, labelClass, inputClass, errorClass, id};
}


export const inputField = ({name, label, type, value, error, onChange, ...styles}) => {
    defineStyles({...styles});
    return (
        <div className = {divClass}>
            <label className= {labelClass} htmlFor={name}>{label}</label>
            <input 
                className={inputClass} 
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

