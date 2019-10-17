import React from 'react';

const TextInput = ({
  name,
  placeholder,
  type,
  value,
  onChangeHandler,
  touched,
  errorMsg
}) => {
  return (
    <div className='field'>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
      />
      <label>{`${touched && errorMsg ? errorMsg : ''}`}</label>
    </div>
  );
};

export default TextInput;
