import React from 'react';

const BasicInfo = ({ handleNextClick }) => {
  return (
    <div>
      <p>basic info</p>
      <button type="button" onClick={handleNextClick}>
        Not interested?
      </button>
    </div>
  );
};

export default BasicInfo;
