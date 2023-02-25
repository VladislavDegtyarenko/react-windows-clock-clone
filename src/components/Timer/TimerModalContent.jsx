import { useState, useEffect, useRef } from "react";

import TimeInputSection from "../../ui/TimeInputSection";
import InputText from "../../ui/CustomInputText";

import ModalContent from "../../ui/Modal/ModalContent";

function TimerModalContent({
   id,
   title,
   name,
   time = 0,
   onSave,
   onCancel,
   deleteTimer,
}) {
   const hoursRef = useRef(),
      minutesRef = useRef(),
      secondsRef = useRef(),
      inputNameRef = useRef();

   const timeRef = {
      hours: hoursRef,
      minutes: minutesRef,
      seconds: secondsRef,
   };

   const [timeInputs, setTimeInputs] = useState([
      {
         id: "hours",
         value: Math.floor(time / 1000 / 60 / 60),
         minValue: 0,
         maxValue: 99,
      },
      {
         id: "minutes",
         value: Math.floor(time / 1000 / 60) % 60,
         minValue: 0,
         maxValue: 59,
      },
      {
         id: "seconds",
         value: Math.floor(time / 1000) % 60,
         minValue: 0,
         maxValue: 59,
      },
   ]);

   const handleTimeInputsChange = (id, value) => {
      setTimeInputs((prevInputs) =>
         prevInputs.map((input) => {
            return input.id === id ? { ...input, value } : input;
         })
      );
   };

   useEffect(() => {
      hoursRef.current.focus();
   }, []);

   return (
      <ModalContent
         title={title}
         onDelete={() => deleteTimer(id)}
         onSave={() =>
            onSave({ id, name: inputNameRef.current.value, timeRef })
         }
         onCancel={onCancel}
      >
         <TimeInputSection
            time={time}
            timeRef={timeRef}
            timeInputs={timeInputs}
            onChange={handleTimeInputsChange}
         />
         <InputText id={"Timer Name"} text={name} inputRef={inputNameRef} />
      </ModalContent>
   );
}

export default TimerModalContent;
