import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MoreInfo from './MoreInfo';
import BasicInfo from './BasicInfo';

const Activity = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [flipped, setFlipped] = useState(false);
  const { art, alcohol, outdoor, indoor } = location.state;

  const handleNextClick = () => {
    //this will pick another activity based on current state
  };

  return (
    <div>
      <button type="button" onClick={() => navigate('/')}>
        Change your mind?
      </button>
      <div>
        {!flipped ? <BasicInfo handleClick={handleNextClick} /> : <MoreInfo />}
        <button type="button" onClick={() => setFlipped(!flipped)}>
          Flip
        </button>
      </div>
    </div>
  );
};

export default Activity;
