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
    console.log(response.data);
    console.log(
      response.data.map((park) => {
        return {
          type: "PARK",
        };
      })
    );
    return response.data;
  } catch (error) {
    console.error("NPS💀", error);
  }
};

/*
"url": "https://www.nps.gov/afbg/index.htm",
"description": 
"fullName": "African Burial Ground National Monument",
"entranceFees": [
        {
          "cost": "0.00",
*/

export const recreationalAPI = async () => {
  try {
    const RECREATIONAL_API = process.env.REACT_APP_RECREATIONAL_API;
    const response = await axios.get(
      `https://ridb.recreation.gov/api/v1/recareas?limit=50&offset=0&state=NY&lastupdated=10-01-2018&apikey=${RECREATIONAL_API}`
    );
    return response.data;
  } catch (error) {
    console.error("RECREATIONAL💀", error);
  }
};
/**
 "RECDATA": [
    {"RecAreaName":
    "RecAreaDirections": 
  */

export const breweryAPI = async () => {
  try {
    const response = await axios.get(
      "https://api.openbrewerydb.org/breweries?by_state=new_york"
    );
    return response.data;
  } catch (error) {
    console.error("BREWERY💀", error);
  }
};
/*
objs in an array
name": "12 Gates Brewing Company",
website_url": "http://www.12gatesbrewing.com",
  "city": "Williamsville",
    "state": "New York",
*/

export const artAPI = async () => {
  try {
    const response = await axios.get(
      "https://data.cityofnewyork.us/resource/43hw-uvdj.json"
    );
    return response.data;
  } catch (error) {
    console.error("ART💀", error);
  }
};
/**
 [
  {
    "the_geom": {
        "name": "O'reilly William & Co Ltd",
    "url": "http://www.nyc.com/arts__attractions/oreilly_william__co_ltd.806/whats_nearby.aspx",
    city:
 */
