import React from 'react';
import Loading from './Loading';

const BasicInfo = ({ handleNextClick, activity }) => {
  const words = [
    'cool',
    'groovy',
    'neat',
    'fun',
    'nice',
    'lovely',
    'rad',
    'dope',
    'far out',
    'radical',
    'super duper',
    'chill',
    'sweet',
    'yeji-tastic',
    'hannah-rific',
    'pho-tastic',
    'spectacular',
  ];
  const max = words.length - 1;

  return activity && activity.type ? (
    <div className="basicInfo">
      <h1>{`Do you want to go to a ${activity.type}?!?`}</h1>
      <p>{`We heard ${activity.name} is pretty ${
        words[Math.round(Math.random() * max)]
      }...`}</p>
      <div className="horizontalSeperation"></div>
      <button className="skipButton" type="button" onClick={handleNextClick}>
        Nah! Something else...
      </button>
    </div>
  ) : (
    <div className="basicInfo">
      <Loading />
    </div>
  );
};

export default BasicInfo;
