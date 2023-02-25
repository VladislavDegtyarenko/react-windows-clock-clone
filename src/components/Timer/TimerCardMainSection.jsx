import TimerCircle from "./TimerCircle";
import TimerDigits from "./TimerDigits.jsx";

import { Button } from "@fluentui/react-components";

import {
   Play16Filled as StartIcon,
   Pause16Filled as PauseIcon,
   ArrowCounterclockwise16Regular as ResetIcon,
} from "@fluentui/react-icons";

import CONSTANTS from "./timer-constants.js";

import styles from "./TimerStyles.module.css";

function TimerCardMainSection({
   timer,
   refs,
   toggleStartTimer,
   resetTimer,
   timerEditingState,
}) {
   return (
      <main className={styles["timer-card__main"]} ref={refs || null}>
         <div className={styles["timer-card__info"]}>
            <TimerCircle timer={timer} CONSTANTS={CONSTANTS} />
            <TimerDigits
               time={timer.time || timer.initialTime}
               isActive={timer.isRunning}
            />
         </div>

         <div className={styles["timer-card__controls"]}>
            <Button
               onClick={(e) => {
                  e.stopPropagation();
                  toggleStartTimer(timer.id);
               }}
               icon={timer.isRunning ? <PauseIcon /> : <StartIcon />}
               appearance="primary"
               shape="circular"
               disabled={timerEditingState || timer.initialTime === 0}
            ></Button>
            <Button
               onClick={(e) => {
                  e.stopPropagation();
                  resetTimer(timer.id);
               }}
               icon={<ResetIcon />}
               appearance="secondary"
               shape="circular"
               disabled={
                  timerEditingState ||
                  (timer.time === timer.initialTime && !timer.isRunning)
               }
            ></Button>
         </div>
      </main>
   );
}

export default TimerCardMainSection;
