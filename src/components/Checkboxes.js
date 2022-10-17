import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  seatGeekAPI,
  npsAPI,
  recreationalAPI,
  breweryAPI,
  artAPI,
} from '../requests/activities';

const Checkboxes = () => {
  const navigate = useNavigate();

  const [art, setArt] = useState(false);
  const [alcohol, setAlcohol] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  const [indoor, setIndoor] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (submitted) {
      navigate('/activity', {
        state: { options },
      });
    }
  }, [submitted]);

  const handleSubmit = async (event) => {
    event.preventDefault();

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

    setSubmitted(true);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="category">
        <input
          type="checkbox"
          id="artsy"
          checked={art}
          onChange={() => setArt(!art)}
        />
        <label htmlFor="artsy">Feeling artsy? 🎨</label>
      </div>
      <div className="category">
        <input
          type="checkbox"
          id="alcohol"
          checked={alcohol}
          onChange={() => setAlcohol(!alcohol)}
        />
        <label htmlFor="alcohol">Feeling tipsy? 🍻</label>
      </div>
      <div className="category">
        <input
          type="checkbox"
          id="outdoorsy"
          checked={outdoor}
          onChange={() => setOutdoor(!outdoor)}
        />
        <label htmlFor="outdoorsy">Feeling outdoorsy? 🌳</label>
      </div>
      <div className="category">
        <input
          type="checkbox"
          id="indoorsy"
          checked={indoor}
          onChange={() => setIndoor(!indoor)}
        />
        <label htmlFor="indoorsy">Feeling indoorsy? 🎤</label>
      </div>
      <div className="horizontalSeperation"></div>
      <div className="buttonContainer">
        <input className="submitButton" type="submit" />
      </div>
    </form>
  );
};

export default Checkboxes;
