import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MoreInfo from './MoreInfo';
import BasicInfo from './BasicInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faRotateForward} from '@fortawesome/free-solid-svg-icons'
import "../styling/App.css";

const Activity = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [flipped, setFlipped] = useState(false);
  const { art, alcohol, outdoor, indoor } = location.state;

  const handleNextClick = () => {
    //this will pick another activity based on current state
  };

  return (
    <div className = "activity">
      <button className = "backButton" type="button" onClick={() => navigate('/')}>
      <FontAwesomeIcon icon={faChevronLeft} />
      Change your mind? 
      </button>
    
      <div>
        {!flipped ? <BasicInfo handleClick={handleNextClick} /> : <MoreInfo />}
        <button className = "flippedButton flipCard" type="button" onClick={() => setFlipped(!flipped)}>
        <FontAwesomeIcon icon={faRotateForward} />
        </button>
      </div>
    </div>
  );
};

export default Activity;
