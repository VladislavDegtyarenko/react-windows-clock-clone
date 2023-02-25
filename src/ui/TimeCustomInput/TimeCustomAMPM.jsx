import { useState } from "react";

import TimeCustomInput from ".";

import styles from "./TimeCustomInput.module.css";

function TimeCustomAMPM({ id, checked, inputRef, onChange }) {
   const [isPm, setIsPm] = useState(checked);

   const toggleIsPmChange = () => {
      setIsPm((prev) => !prev);
   };

   const inputSettings = {
      id,
      type: "checkbox",
      readOnly: true,
      checked: isPm,
      className: styles.ampm,
      ref: inputRef,
   };

   return (
      <TimeCustomInput
         handleArrowUpKey={toggleIsPmChange}
         handleArrowDownKey={toggleIsPmChange}
         inputSettings={inputSettings}
      ></TimeCustomInput>
   );
}

export default TimeCustomAMPM;
