import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MoreInfo from "./MoreInfo";
import BasicInfo from "./BasicInfo";
import {
  seatGeekAPI,
  npsAPI,
  recreationalAPI,
  breweryAPI,
  artAPI,
} from "../requests/activities";

const Activity = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [flipped, setFlipped] = useState(false);
  const [options, setOptions] = useState([]);

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

  console.log(options);

  const handleNextClick = () => {
    //this will pick another activity based on current state
  };

  return (
    <div>
      <button type="button" onClick={() => navigate("/")}>
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
