import React from 'react';

const TextInput = ({ name, placeholder, type, value, onChangeHandler }) => {
  return (
    <div className='field'>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
      />
    </div>
  );
};

export default TextInput;
