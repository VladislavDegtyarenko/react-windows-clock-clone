import styles from "./styles.module.css";

function Digits({ time = 0, isRunning: isActive, helpers = false }) {
   const formatTime = (time) => {
      const hours = Math.floor(time / 1000 / 60 / 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const seconds = Math.floor((time / 1000) % 60);
      const milliseconds = (time / 100) % 10;

      const hh = twoDigits(hours);
      const mm = twoDigits(minutes);
      const ss = twoDigits(seconds);
      // const ms = twoDigits(milliseconds);
      const ms = milliseconds;
      return `${hh}:${mm}:${ss}.${ms}`;
   };

   const twoDigits = (num) => (num < 10 ? "0" + num : num);

   const [hhMMSS, mS] = formatTime(time).split(".");

   return (
      <h4
         className={`${styles.digits} ${
            !isActive ? styles["digits--not-running"] : ""
         }`}
         style={{ paddingBottom: helpers ? ".25em" : "" }}
      >
         <span>
            {hhMMSS}
            {helpers && (
               <span className={styles.helper}>
                  <span>hr</span>
                  <span>min</span>
                  <span>sec</span>
               </span>
            )}
         </span>
         .<span>{mS}</span>
      </h4>
   );
}

export default Digits;
