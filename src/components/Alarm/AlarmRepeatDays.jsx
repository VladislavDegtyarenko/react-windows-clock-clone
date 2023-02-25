import AlarmDayCheckbox from "./AlarmDayCheckbox";
import styles from "./AlarmRepeatDays.module.css";

const shortWeekdays = {
   sunday: "Su",
   monday: "M",
   tuesday: "Tu",
   wednesday: "We",
   thursday: "Th",
   friday: "Fri",
   saturday: "Sa",
};

function AlarmRepeatDays({
   repeatDays,
   enabled,
   repeatDayRefs,
   noInteraction = false,
}) {
   const isModal = !noInteraction;

   const getShortWeekday = (weekday) => {
      return Object.entries(shortWeekdays).find((wd) => wd[0] === weekday)[1];
   };

   const repeatDaysArr = Object.entries(repeatDays);

   return (
      <ul
         className={`${styles["alarm-repeat-days"]} ${
            !isModal ? styles["read-only"] : ""
         }`}
      >
         {repeatDaysArr.map(([day, isRepeated], index) => (
            <li
               key={day}
               // className={`${isRepeated ? styles.active : ""} ${
               //    !enabled ? styles.disabled : ""
               // }`}
            >
               <AlarmDayCheckbox
                  id={day}
                  label={getShortWeekday(day)}
                  enabled={enabled}
                  checked={isRepeated}
                  isModal={isModal}
                  refs={
                     repeatDayRefs
                        ? (input) => (repeatDayRefs.current[index] = input)
                        : null
                  }
               />
            </li>
         ))}
      </ul>
   );
}

export default AlarmRepeatDays;
