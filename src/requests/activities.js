import axios from "axios";
import { seatGeekCapitalize } from "./helperFunctions";

export const seatGeekAPI = async () => {
  try {
    const SEATGEEK_API = process.env.REACT_APP_SEATGEEK_API; //for .env, put REACT_APP_ before each key variable name
    const response = await axios.get(
      `https://api.seatgeek.com/2/events?client_id=${SEATGEEK_API}&lat=40.7484&lon=-73.9857&range=150mi`
    );

    return response.data.events.map((event) => {
      return {
        type: seatGeekCapitalize(event.type),
        time: event.datetime_utc.slice(11, 16),
        place: event.venue.name,
        website: event.venue.url,
        location: event.venue.display_location,
        name: event.short_title,
        description: null,
        cost: true,
      };
    });
  } catch (error) {
    console.error("SEATGEEK💀", error);
  }
};

export const npsAPI = async () => {
  try {
    const NPS_API = process.env.REACT_APP_NPS_API;
    const response = await axios.get(
      `https://developer.nps.gov/api/v1/parks?stateCode=ny&api_key=${NPS_API}`
    );

    return response.data.data.map((park) => {
      return {
        type: "PARK",
        time: null,
        place: null,
        website: park.url,
        location: "NY",
        name: park.fullName,
        description: park.description,
        cost: false,
      };
    });
  } catch (error) {
    console.error("NPS💀", error);
  }
};

export const recreationalAPI = async () => {
  try {
    const RECREATIONAL_API = process.env.REACT_APP_RECREATIONAL_API;
    const response = await axios.get(
      `https://ridb.recreation.gov/api/v1/recareas?limit=50&offset=0&state=NY&lastupdated=10-01-2018&apikey=${RECREATIONAL_API}`
    );

    return response.data.RECDATA.map((park) => {
      return {
        type: "PARK",
        time: null,
        place: null,
        website: null,
        location: "NY",
        name: park.RecAreaName,
        description: park.RecAreaDescription,
        cost: false,
      };
    });
  } catch (error) {
    console.error("RECREATIONAL💀", error);
  }
};

export const breweryAPI = async () => {
  try {
    const response = await axios.get(
      "https://api.openbrewerydb.org/breweries?by_state=new_york"
    );

    return response.data.map((brewery) => {
      return {
        type: "BREWERY",
        time: null,
        place: null,
        website: brewery.website_url,
        location: `${brewery.city}, NY`,
        name: brewery.name,
        description: null,
        cost: true,
      };
    });
  } catch (error) {
    console.error("BREWERY💀", error);
  }
};

export const artAPI = async () => {
  try {
    const response = await axios.get(
      "https://data.cityofnewyork.us/resource/43hw-uvdj.json?$limit=25"
    );
    return response.data.map((gallery) => {
      return {
        type: "ART GALLERY",
        time: null,
        place: null,
        website: gallery.url,
        location: `${gallery.city}, NY`,
        name: gallery.name,
        description: null,
        cost: false,
      };
    });
  } catch (error) {
    console.error("ART💀", error);
  }
};
