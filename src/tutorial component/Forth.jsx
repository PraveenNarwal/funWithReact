import React from 'react'
import { useEffect, useState } from "react";

/*
1. Create "input" with class="lat" and placeholder="Latitude"
    2. onClick this "input" update lat state which is in code.
    3. Create "input" with class="long" and placeholder="Longitude"
    4. onClick this "input" update long state which is in code.
    5. You don't need to create button it's already their
    6. Create a "div" with class="temp" which should render temperature. (name in object is air_temperature)
    7. Create a "div" with class="wind-speed" which should render wind speed. (name in object is wind_speed)


Response that you'll get from api would look like this:
{
  properties: {
    timeseries: [
      {
        data: {
          instant: {
            details: {
              air_temperature: 80,
              wind_speed: 12,
            },
          },
        },
      },
    ],
  },
};
*/
function Forth() {
  const [data, setData] = useState({});
  const [lat, setLat] = useState("51.5");
  const [long, setLong] = useState("0.12");
  const [status, updateStatus] = useState(true);

  useEffect(() => {
    // add api url below
    fetch(
      `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${long}`
    )
      .then((response) => response.json())
      .then((forecast) =>
        setData(forecast.properties.timeseries[0].data.instant.details)
      );
  }, [status]);

  return (
    <React.Fragment>
      {/* write your code here */}
      <input className="lat" placeholder="Latitude" onChange={(e) => setLat(e.target.value)} />
      <input className="long" placeholder="Longitude" onChange={(e) => setLong(e.target.value)} />

      <button className="search" onClick={() => updateStatus(!status)}>
        Search
      </button>
      {/* or write your code here*/}
      <div className="temp">{data.air_temperature} </div>
      <div className="wind-speed">{data.wind_speed} </div>
    </React.Fragment>
  );
};

export default Forth
