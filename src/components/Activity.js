import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MoreInfo from './MoreInfo';
import BasicInfo from './BasicInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faRotateForward } from '@fortawesome/free-solid-svg-icons';
import '../styling/App.css';

const Activity = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [flipped, setFlipped] = useState(false);
  const [activity, setActivity] = useState({});

  const { options } = location.state;

  useEffect(() => {
    if (options.length) pickActivity();
  }, []);
  //whenever options update, this will run -hannah told yeji

  const pickActivity = () => {
    const max = options.length - 1;
    const num = Math.round(Math.random() * max);
    setActivity(options[num]);
  };

  const handleNextClick = () => {
    pickActivity();
  };

  return (
    <div className="activity">
      <button
        className="backButton"
        type="button"
        onClick={() => navigate('/')}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        Change your mind?
      </button>

      <div>
        {!flipped ? (
          <BasicInfo handleNextClick={handleNextClick} activity={activity} />
        ) : (
          <MoreInfo activity={activity} />
        )}
        <button
          className="flippedButton flipCard"
          type="button"
          onClick={() => setFlipped(!flipped)}
        >
          <FontAwesomeIcon icon={faRotateForward} />
        </button>
      </div>
    </div>
  );
};

export default Activity;
