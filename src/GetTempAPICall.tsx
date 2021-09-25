import axios from "axios";

export async function GetTempAPICall(lat: number, lon: number) {
  //would normally use .env for API key on production app but
  //didn't to make it the app run with less hassle.
  const API_KEY = "cb51aa86cd7d74b98b4d1e1b5ed19498";

  return new Promise((resolve, reject) => {
    //no need to make two calls to this api because the first response is current
    const response = axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .catch((error) => {
        reject(`Something went wrong. ${error}`);
      });
    resolve(response);
  });
}
