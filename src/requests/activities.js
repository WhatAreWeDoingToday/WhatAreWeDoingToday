import axios from "axios";

export const seatGeekAPI = async () => {
  let SEATGEEK_API = process.env.REACT_APP_SEATGEEK_API;
  let URL = `https://api.seatgeek.com/2/events?client_id=${SEATGEEK_API}&lat=40.7484&lon=-73.9857&range=150mi`;

  let response = await axios.get(URL);

  console.log(response.data);
};
