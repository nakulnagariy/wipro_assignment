import React from 'react'

const TextInput = ({
    id,
    label,
    placeholder,
    name,
    type,
    disabled,
    className,
    handleChange,
    maxLength,
    touched, 
    error
}) => {
    let activeWrapperClass = "input-group";
    let activeInputClass = "";
    if(touched && error) {
        activeWrapperClass = activeWrapperClass + " input-group-alert";
        activeInputClass = " input-group-alert d-inline-block";
    }

  return (
    <div className={activeWrapperClass}>
    <label htmlFor={id} >{label}</label>
    <input 
        type={type}
        placeholder={placeholder}
        aria-label={label}
        aria-describedby={label}
        className={activeInputClass}
        disabled={disabled}
        id={id}
        name={name}
        maxLength={maxLength}
        onChange={handleChange}/>
        {touched && error && (<small className="feedback" id={"err_" + id}>{error}</small>)}
</div>
  )
};

export default TextInput;