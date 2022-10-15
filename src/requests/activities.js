
async function seatGeekAPI(){

    let SEATGEEK_API = process.env.SEATGEEK_API;
    let URL = `https://api.seatgeek.com/2/events?client_id=${SEATGEEK_API}=40.7484&lon=-73.9857&range=150mi`;

    let response = await fetch(URL, {mode: "cors"});


}