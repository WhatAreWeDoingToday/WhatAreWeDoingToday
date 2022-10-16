import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkboxes = () => {
  const navigate = useNavigate();

  const [art, setArt] = useState(false);
  const [alcohol, setAlcohol] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  const [indoor, setIndoor] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate('/activity', {
      state: { art, alcohol, outdoor, indoor },
    });
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
