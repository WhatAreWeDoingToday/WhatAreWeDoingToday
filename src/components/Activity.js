import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MoreInfo from './MoreInfo';
import BasicInfo from './BasicInfo';
import {
  seatGeekAPI,
  npsAPI,
  recreationalAPI,
  breweryAPI,
  artAPI,
} from '../requests/activities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faRotateForward } from '@fortawesome/free-solid-svg-icons';
import '../styling/App.css';

const Activity = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [flipped, setFlipped] = useState(false);
  const [options, setOptions] = useState([]);
  const [activity, setActivity] = useState({});

  const { art, alcohol, outdoor, indoor } = location.state;

  useEffect(() => {
    return async () => {
      let seatGeek = indoor ? await seatGeekAPI() : [];
      let nps = outdoor ? await npsAPI() : [];
      let recreational = outdoor ? await recreationalAPI() : [];
      let brewery = alcohol ? await breweryAPI() : [];
      let artGallery = art ? await artAPI() : [];

      if (!art && !alcohol && !outdoor && !indoor) {
        seatGeek = await seatGeekAPI();
        nps = await npsAPI();
        recreational = await recreationalAPI();
        brewery = await breweryAPI();
        artGallery = await artAPI();
      }

      setOptions([
        ...seatGeek,
        ...nps,
        ...recreational,
        ...brewery,
        ...artGallery,
      ]);
    };
  }, []);

  useEffect(() => {
    if (options.length) pickActivity();
  }, [options]);
  //whenever options update, this will run-hannah told yeji

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
