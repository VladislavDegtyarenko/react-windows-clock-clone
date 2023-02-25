import Digits from "../../ui/Digits";

import styles from "./TimerStyles.module.css";

function TimerDigits({ time = 0, isActive }) {
   return (
      <div className={styles["timer-card__digits"]}>
         <Digits time={time} isActive={isActive} />
      </div>
   );
}

export default TimerDigits;
