import React, { useState } from 'react';

const AddText = ({ setinputValue }) => {
  const [textValue, settextValue] = useState('');

  const handleInput = (e) => {
    settextValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textValue.trim().length >= 2) {
      setinputValue((text) => [textValue, ...text]);
      settextValue('');
    }
  };

  return (
    <div className="navbar bg-danger">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center w-100">
          <input
            className="form-control mr-3"
            type="text"
            placeholder="Insert Text"
            onChange={handleInput}
          />
          <button className="btn btn-primary ml-3" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddText;
