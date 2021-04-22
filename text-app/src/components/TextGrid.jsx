import React, { useEffect, useState } from 'react';
import { getReverseText } from '../helpers/getReverseText';
import TextItem from './TextItem';

const TextGrid = ({ inputValue }) => {
  const [reverseText, setreverseText] = useState([]);

  useEffect(() => {
    getReverseText(inputValue).then(setreverseText);
  }, [inputValue]);

  return (
    <>
      {reverseText.map((resp) => (
        <TextItem
          text={resp.text}
          palindrome={resp.palindrome}
          key={resp.text}
        />
      ))}
    </>
  );
};

export default TextGrid;
