import React from 'react';

export default props => {
    const { autoComplete="off", name, label, meta, type="text", placeholder=null, value} = props

    const hasError = meta.touched && meta.error;

    return(
        <div className="input-field">
            <label className="field-label" for={name}> {label}</label>
            <input className="input" name={name} {...props} /> //examine this guy to see if the props are behaving as though we individually defined each one, or if we need to go and write them out as in below
            {/* <input className="input" name={name} placeholder={placeholder} type={type} autoComplete={autoComplete} /> */}
            <div>{hasError}</div>
        </div>
    )
};