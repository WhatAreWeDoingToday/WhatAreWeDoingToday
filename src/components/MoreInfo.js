import React from 'react';
import '../styling/App.css';

const MoreInfo = ({ activity }) => {
  const { name, description, cost, website, location } = activity;

  return (
    <div className="moreInfo">
      <h1 className="learnMore">More Info</h1>
      <div className = "info">
        <p className = "infoName">{`${name}`}</p>
        {description && <p className = "description">{`${description}`}</p>}
        <div className="horizontalSeperation"></div>
        <p className = "infoLocation">{`${location}`}</p>
        {cost ? <p>*Must buy tickets*</p> : <p>It's free, baby!</p>}
        {website && (
          <a href={`${website}`} target="_blank" rel="noreferrer">
            Website
          </a>
        )}

      </div>
    </div>
  );
};

export default MoreInfo;
