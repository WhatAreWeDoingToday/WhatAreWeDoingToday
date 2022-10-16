import axios from "axios";

export const seatGeekAPI = async () => {
  try {
    const SEATGEEK_API = process.env.REACT_APP_SEATGEEK_API; //for .env, put REACT_APP_ before each key variable name
    const response = await axios.get(
      `https://api.seatgeek.com/2/events?client_id=${SEATGEEK_API}&lat=40.7484&lon=-73.9857&range=150mi`
    );
    return response.data;
  } catch (error) {
    console.error("💀", error);
  }
};

/** response.data.events.map() (events is an array)
 * "type": "concert",
    "datetime_utc": "2022-10-15T07:30:00",
    venue[name]
    venue[url]
    venue[display_location]
    short_title
 */

export const npsAPI = async () => {
  try {
    const NPS_API = process.env.REACT_APP_NPS_API;
    const response = await axios.get(
      `https://developer.nps.gov/api/v1/parks?stateCode=ny&api_key=${NPS_API}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("💀", error);
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
