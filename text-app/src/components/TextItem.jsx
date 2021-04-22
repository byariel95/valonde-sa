import React from 'react';

const TextItem = ({ text }) => {
  return (
    <div className="card m-2">
      <div className="card-body">{text}</div>
    </div>
  );
};

export default TextItem;
