import React from 'react';
import '../styling/App.css';

const MoreInfo = ({ activity }) => {
  const { name, description, cost, website, location } = activity;

  return (
    <div className="moreInfo">
      <h1 className="learnMore">More Info</h1>
      <p>{`${name}`}</p>
      {description && <p>{`${description}`}</p>}
      <p>{`${location}`}</p>
      {cost ? <p>*Must buy tickets*</p> : <p>It's free, baby!</p>}
      {website && (
        <a href={`${website}`} target="_blank" rel="noreferrer">
          Website
        </a>
      )}
      <div className="horizontalSeperation"></div>
    </div>
  );
};

export default MoreInfo;
