import { useState } from "react";

import TimeCustomInput from ".";

function TimeCustomNumberSelect({ id, value, minValue, maxValue, inputRef }) {
   const [inputValue, setInputValue] = useState(value);

   const increment = () => {
      setInputValue((prevValue) => {
         return prevValue + 1 > maxValue ? minValue : ++prevValue;
      });
   };

   const decrement = () => {
      setInputValue((prevValue) => {
         return prevValue - 1 < minValue ? maxValue : --prevValue;
      });
   };

   const handleDigitKeyPress = (e) => {
      const pressedDigit = e.key;

      setInputValue((prevValue) => {
         const newNumber = +(String(prevValue).slice(-1) + pressedDigit);

         return newNumber < maxValue ? newNumber : pressedDigit;
      });
   };

   const formattedValue = (value) => {
      return value < 10 ? "0" + value : value;
   };

   const inputSettings = {
      id,
      type: "number",
      min: minValue,
      max: maxValue,
      readOnly: true,

      value: formattedValue(inputValue),
      ref: inputRef,
   };

   return (
      <TimeCustomInput
         handleArrowUpKey={increment}
         handleArrowDownKey={decrement}
         handleDigitKeyPress={handleDigitKeyPress}
         inputSettings={inputSettings}
      ></TimeCustomInput>
   );
}

export default TimeCustomNumberSelect;
