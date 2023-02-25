import { useState, useEffect, useRef } from "react";

import Card from "../../ui/Card/Card.jsx";

import TimerCardMainSection from "./TimerCardMainSection.jsx";

import { Button } from "@fluentui/react-components";
import {
   ArrowMaximize24Regular as FullscreenIcon,
   Delete16Regular as DeleteIcon,
} from "@fluentui/react-icons";

import styles from "./TimerStyles.module.css";

function Timer({
   timer,
   timerActions: {
      initTimerWorker,
      toggleStartTimer,
      resetTimer,
      editTimer,
      saveTimerChanges,
      closeModal,
      deleteTimer,
   },
   timerEditingState,
}) {
   useEffect(() => {
      initTimerWorker(timer.id);
   }, []);

   return (
      <Card
         className={`${styles["timer-card"]} ${
            timerEditingState ? styles.edit : ""
         }`}
         onClick={() => editTimer(timer)}
      >
         <header>
            <h3 className={styles["timer-card__title"]}>{timer.name}</h3>
            {/* <Button
                  onClick={(e) => {
                     e.stopPropagation();
                  }}
                  icon={<FullscreenIcon />}
                  appearance="subtle"
                  disabled
               ></Button> */}
            {!timerEditingState ? null : (
               <Button
                  onClick={(e) => {
                     e.stopPropagation();
                     deleteTimer(timer.id);
                  }}
                  icon={<DeleteIcon />}
                  appearance="subtle"
               ></Button>
            )}
         </header>

         <TimerCardMainSection
            timer={timer}
            toggleStartTimer={toggleStartTimer}
            resetTimer={resetTimer}
            timerEditingState={timerEditingState}
         />
      </Card>
   );
}

export default Timer;
