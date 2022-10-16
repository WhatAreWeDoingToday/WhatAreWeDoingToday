import React from "react";

const BasicInfo = ({ handleNextClick }) => {
  return (
    <div className="basicInfo">
      <h1>Suggestion</h1>
      <p>basic info</p>
      <div className="horizontalSeperation"></div>
      <button className="skipButton" type="button" onClick={handleNextClick}>
        Not interested?
      </button>
    </div>
  );
};

export default BasicInfo;
