import styles from "./TimerStyles.module.css";

function TimerCircle({
   timer: { isRunning, time, initialTime },
   CONSTANTS: { FULL_DASH_ARRAY, TIMER_STEP },
}) {
   const getTimeFraction = () => {
      return time / initialTime;
   };

   const getCircleStrokeDasharray = () => {
      return `${
         Math.round(getTimeFraction() * FULL_DASH_ARRAY) || 0
      } ${FULL_DASH_ARRAY}`;
   };

   const circleStyles = {
      display: `${getTimeFraction() === 1 ? "none" : ""} `,
      opacity: `${!isRunning && time > 0 ? "0.5" : ""}`,
      transition: `all ${TIMER_STEP / 1000}s ease-in`,
   };

   return (
      <svg
         className={styles["timer-card__circle"]}
         viewBox="0 0 100 100"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g>
            <circle
               className={styles["timer-card__circle_elapsed"]}
               cx="50"
               cy="50"
               r="45"
            ></circle>
            <path
               strokeDasharray={getCircleStrokeDasharray()}
               className={styles["timer-card__circle_remaining"]}
               style={circleStyles}
               d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0
               "
            ></path>
         </g>
      </svg>
   );
}

export default TimerCircle;
