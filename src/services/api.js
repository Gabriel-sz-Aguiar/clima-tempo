/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
const KEY = '17cc76b61de247da9e5194300231506';

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
  
  const fetchResponse = await fetch(url);

  const data = await fetchResponse.json();

  return data;
};

export default fetchData;
