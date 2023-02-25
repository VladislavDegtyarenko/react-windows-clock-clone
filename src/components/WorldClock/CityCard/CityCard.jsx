import suntimes from "../../../suntimes";

import {
   WeatherSunny16Regular as DayIcon,
   WeatherMoon16Regular as NightIcon,
} from "@fluentui/react-icons";

import styles from "./CityCard.module.css";

function CityCard({
   cityName,
   cityTimezone,
   cityTimezoneOffset,
   latitude,
   longtitude,
   myTimezoneDate,
}) {
   const cityDate = new Date(
      myTimezoneDate.toLocaleString("en-US", { timeZone: cityTimezone })
   );

   // const cityTimezoneOffset = Math.round(
   //    ((myTimezoneDate - cityDate) / 1000 / 60 / 60) * -1
   // );

   const myTimezoneOffset = myTimezoneDate.getTimezoneOffset() / 60;
   const timezoneOffsetFromMyLocation = cityTimezoneOffset + myTimezoneOffset;

   const [sunriseFloat, sunsetFloat] = suntimes(
      latitude,
      longtitude,
      cityTimezoneOffset
   );

   // value like 5.12315124 we need to convert to [5, 12]
   const parseFloatHours = (hours) => [
      Math.floor(hours),
      Math.floor((hours - Math.floor(hours)) * 60),
   ];

   const [sunriseHours, sunriseMinutes] = parseFloatHours(sunriseFloat);
   const [sunsetHours, sunsetMinutes] = parseFloatHours(sunsetFloat);

   const sunriseDate = new Date(cityDate);
   sunriseDate.setHours(sunriseHours);
   sunriseDate.setMinutes(sunriseMinutes);

   const sunsetDate = new Date(cityDate);
   sunsetDate.setHours(sunsetHours);
   sunsetDate.setMinutes(sunsetMinutes);

   const isDay = cityDate > sunriseDate && cityDate < sunsetDate;

   // console.log(cityName);
   // console.log("cityDate", cityDate.toLocaleTimeString());
   // console.log("sunriseDate", sunriseDate.toLocaleTimeString());
   // console.log("sunsetDate", sunsetDate.toLocaleTimeString());

   const getOffsetString = (offset, suffix = "hr") => {
      if (offset === 0) return null;

      if (offset > 0) offset = "+" + offset;

      if (Math.abs(offset) > 1) suffix += "s";

      return `${offset} ${suffix}`;
   };

   const year = cityDate.getFullYear();
   const month = cityDate.getMonth() + 1;
   const day = cityDate.getDate();

   const hours = cityDate.getHours();
   const minutes = cityDate.getMinutes();

   const hh = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
   const mm = minutes < 10 ? "0" + minutes : minutes;
   const isPM = hours > 11;

   const dateString = `${month}/${day}/${year}`;
   const offsetString = getOffsetString(timezoneOffsetFromMyLocation);
   console.log(offsetString);
   return (
      <li className={styles.card}>
         <div className={styles.cardIcon}>
            {isDay ? <DayIcon /> : <NightIcon />}
         </div>
         <div className={styles.cardTime}>
            <span>
               {hh}:{mm}
            </span>
            {isPM ? "PM" : "AM"}
         </div>
         <div className={styles.cardDetails}>
            <div>{cityName}</div>
            <div>{[dateString, offsetString].filter(Boolean).join(", ")}</div>
         </div>
      </li>
   );
}

export default CityCard;
