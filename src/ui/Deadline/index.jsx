import { default as Icon } from "../../assets/icons/BellIcon";
import styles from "./Deadline.module.css";

function Deadline({ type = "short", time, repeatDays }) {
   const today = new Date();

   const todaysWeekday = today.getDay();

   const [alarmHours, alarmMinutes] = time.split(":");

   let allUpcomingAlarms = Object.entries(repeatDays).reduce(
      (newRepeatedDays, [alarmWeekdayName, isRepeated], alarmWeekday) => {
         const daysToNextAlarm = (7 + alarmWeekday - todaysWeekday) % 7;

         const nextAlarmDate = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + daysToNextAlarm,
            alarmHours,
            alarmMinutes,
            0
         );

         return isRepeated && nextAlarmDate > today
            ? [...newRepeatedDays, nextAlarmDate]
            : newRepeatedDays;
      },
      []
   );

   const getTheEarliestAlarm = () =>
      allUpcomingAlarms.length > 0
         ? allUpcomingAlarms.reduce((pre, cur) => (pre < cur ? pre : cur))
         : new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate() + 1,
              alarmHours,
              alarmMinutes,
              0
           );

   const theEarliestAlarm = getTheEarliestAlarm();

   const todaysTimestamp = today.getTime();
   const diffTime = Math.abs(todaysTimestamp - theEarliestAlarm);

   let theEarliestAlarmDays = diffTime / (24 * 60 * 60 * 1000);
   let theEarliestAlarmHours = (theEarliestAlarmDays % 1) * 24;
   let theEarliestAlarmMinutes = (theEarliestAlarmHours % 1) * 60;
   // let theEarliestAlarmSeconds = 0;

   [theEarliestAlarmDays, theEarliestAlarmHours, theEarliestAlarmMinutes] = [
      Math.floor(theEarliestAlarmDays),
      Math.floor(theEarliestAlarmHours),
      Math.floor(theEarliestAlarmMinutes),
   ];

   const pluralize = (num, word, suffix = "s") => {
      return num > 1 ? `${num} ${word}${suffix}` : `${num} ${word}`;
   };

   const daysString = theEarliestAlarmDays
      ? pluralize(theEarliestAlarmDays, "day")
      : null;
   const hoursString = theEarliestAlarmHours
      ? pluralize(theEarliestAlarmHours, "hour")
      : null;
   const minutesString = theEarliestAlarmMinutes
      ? pluralize(theEarliestAlarmMinutes, "minute")
      : null;

   const deadlineString =
      "in " +
      [daysString, hoursString, minutesString].filter((str) => str).join(", ");

   return (
      <div className={styles.deadline}>
         <Icon />
         {deadlineString}
      </div>
   );
}

export default Deadline;
