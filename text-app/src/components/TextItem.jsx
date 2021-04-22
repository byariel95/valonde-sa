import React from 'react';

const TextItem = ({ text, palindrome }) => {
  const value = palindrome === true ? 'true' : 'false';
  return (
    <div className="card m-2">
      <div className="card-body">
        {text}
        <div className="card-subtitle text-muted">palindrome: {value}</div>
      </div>
    </div>
  );
};

export default TextItem;
