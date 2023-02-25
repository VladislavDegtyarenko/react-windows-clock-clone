import Card from "../../ui/Card/Card";
import Deadline from "../../ui/Deadline";
import AlarmRepeatDays from "./AlarmRepeatDays";
import { Switch } from "@fluentui/react-components";
import { Button } from "@fluentui/react-components";

import styles from "./AlarmStyles.module.css";
import AlarmName from "./AlarmName";

import { Delete16Regular as DeleteIcon } from "@fluentui/react-icons";

function AlarmCard({
   alarm: { id, enabled, name, time, repeatDays, soundTitle, snooze },
   alarmActions: { toggleAlarm, editAlarm, deleteAlarm },
   audio,
   alarmEditingState,
}) {
   return (
      <Card
         className={`${styles["alarm-card"]} ${
            alarmEditingState ? styles.edit : ""
         }`}
         onClick={() =>
            editAlarm({
               id,
               time,
               name,
               enabled,
               repeatDays,
               soundTitle,
               snooze,
               audio,
            })
         }
      >
         <header>
            <h3
               className={`${styles["alarm-card__time"]} ${
                  !enabled ? styles["alarm-card__name--disabled"] : ""
               }`}
            >
               {time}
            </h3>
            {alarmEditingState ? (
               <Button
                  onClick={(e) => {
                     e.stopPropagation();
                     deleteAlarm(id);
                  }}
                  icon={<DeleteIcon />}
                  appearance="subtle"
               ></Button>
            ) : (
               <Switch
                  checked={enabled}
                  onChange={() => toggleAlarm(id)}
                  onClick={(e) => e.stopPropagation()}
                  className={styles["alarm-card__switch"]}
               />
            )}
         </header>
         <Deadline time={time} repeatDays={repeatDays} type="long" />
         <AlarmName name={name} enabled={enabled} />
         <AlarmRepeatDays
            repeatDays={repeatDays}
            enabled={enabled}
            noInteraction={true}
         />
      </Card>
   );
}

export default AlarmCard;
