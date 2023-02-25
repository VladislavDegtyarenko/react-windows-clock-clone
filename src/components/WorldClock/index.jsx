import { useEffect, useState } from "react";

import WorldMap from "../../assets/icons/WorldMap.jsx";

import worldCities from "../../Data/world-cities.jsx";
import suntimes from "../../suntimes.jsx";

import CityCard from "./CityCard/CityCard.jsx";
import MapPoint from "./MapPoint/MapPoint.jsx";

import styles from "./index.module.css";

function WorldClock() {
   const [myTimezoneDate, setMyTimezoneDate] = useState(new Date());

   // useEffect(() => {
   //    let dateInterval = setInterval(() => {
   //       setMyTimezoneDate(new Date());
   //    }, 1000);

   //    return () => clearInterval(dateInterval);
   // }, []);

   console.time("sort");

   const sortedCities = worldCities.sort((a, b) => {
      if (a.timezoneOffset < b.timezoneOffset) return -1;
      if (a.timezoneOffset > b.timezoneOffset) return 1;
      if (a.timezoneOffset === b.timezoneOffset) return 0;
   });

   console.timeEnd("sort");

   // get longtitude of where's sunrise and sunset

   return (
      <div className={styles.worldClock}>
         <div className={styles.mapContainer}>
            <WorldMap />
            {/* <MapPoint city={{ city: "Equator", latitude: 0, longtitude: 0 }} /> */}
            {sortedCities.map((city) => (
               <MapPoint city={city} key={city.city} />
            ))}
         </div>
         <ul className={styles.cardsWrapper}>
            {sortedCities.map(
               ({ city, timezone, timezoneOffset, latitude, longtitude }) => {
                  return (
                     <CityCard
                        key={city}
                        cityName={city}
                        cityTimezone={timezone}
                        cityTimezoneOffset={timezoneOffset}
                        myTimezoneDate={myTimezoneDate}
                        latitude={latitude}
                        longtitude={longtitude}
                     />
                  );
               }
            )}
         </ul>
      </div>
   );
}

export default WorldClock;
