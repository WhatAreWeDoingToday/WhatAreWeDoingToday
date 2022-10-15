import React, { useState } from 'react';

const Checkboxes = () => {
  const [art, setArt] = useState(false);
  const [alcohol, setAlcohol] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  const [indoor, setIndoor] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    //create list from state

    //move to next page
  };

  console.log('art', art);
  console.log('alcohol', alcohol);
  console.log('outdoor', outdoor);
  console.log('indoor', indoor);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          type="checkbox"
          id="artsy"
          checked={art}
          onChange={() => setArt(!art)}
        />
        <label htmlFor="artsy">Feeling artsy?</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="alcohol"
          checked={alcohol}
          onChange={() => setAlcohol(!alcohol)}
        />
        <label htmlFor="alcohol">Feeling tipsy?</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="outdoorsy"
          checked={outdoor}
          onChange={() => setOutdoor(!outdoor)}
        />
        <label htmlFor="outdoorsy">Feeling outdoorsy?</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="indoorsy"
          checked={indoor}
          onChange={() => setIndoor(!indoor)}
        />
        <label htmlFor="indoorsy">Feeling indoorsy?</label>
      </div>
      <input type="submit" />
    </form>
  );
};

export default Checkboxes;
