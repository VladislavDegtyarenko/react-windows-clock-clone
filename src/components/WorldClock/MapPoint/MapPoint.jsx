import { Location16Filled as PinIcon } from "@fluentui/react-icons";

import styles from "./MapPoint.module.css";

function MapPoint({ city: { city, latitude, longtitude } }) {
   const zeroLatitudeOffset = 62;
   const zeroLongtitudeOffset = 46;

   // 0 --- 0deg
   // 100% --- 360deg

   // 0 --- 90deg
   // 50% --- 0%
   // 100% --- -90deg

   const getMapPointPosition = (latitude, longtitude) => {
      const top = (((latitude / 9) * 10) / 2) * -1 + zeroLatitudeOffset;
      const left = (longtitude * 100) / 360 + zeroLongtitudeOffset;

      return {
         top: `${top}%`,
         left: `${left}%`,
      };
   };

   return (
      <div
         className={styles.mapPoint}
         style={getMapPointPosition(latitude, longtitude)}
      >
         <PinIcon />
         <div className={styles.mapPointText}>
            <h4>{city}</h4>
            {/* <span>{"12:00 AM"}</span> */}
         </div>
      </div>
   );
}

export default MapPoint;
