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
        style={{ borderColor: `${!errorMsg ? '' : '#bd3200'}` }}
      />
      <label style={{ color: '#bd3200' }}>{`${
        touched && errorMsg ? errorMsg : ''
      }`}</label>
    </div>
  );
};

export default TextInput;
