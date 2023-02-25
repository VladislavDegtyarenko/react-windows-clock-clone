import { useState, useEffect } from "react";

import styles from "./AlarmDayCheckbox.module.css";

function AlarmDayCheckbox({ id, checked, label, enabled, isModal, refs }) {
   const [isChecked, setIsChecked] = useState(checked);

   const handleCheckboxClick = () => {
      setIsChecked((c) => !c);
   };

   useEffect(() => {
      setIsChecked(checked);
   }, [checked]);

   return (
      <label
         htmlFor={id}
         className={`${styles.checkbox}
            ${isChecked ? styles.active : ""}
            ${!enabled && !isModal ? styles.disabled : ""}
            ${isModal ? styles.isModal : ""}`}
         onClick={(e) => e.stopPropagation()}
      >
         <input
            type="checkbox"
            name={id}
            id={id}
            checked={isChecked}
            onChange={handleCheckboxClick}
            ref={refs}
         />
         <span>{label}</span>
      </label>
   );
}

export default AlarmDayCheckbox;
