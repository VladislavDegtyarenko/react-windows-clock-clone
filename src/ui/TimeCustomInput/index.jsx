import { useState, useEffect } from "react";

import { Button } from "@fluentui/react-components";
import CustomButton from "../CustomButton/CustomButton";

import {
   ChevronUp20Regular as ArrowUpIcon,
   ChevronDown20Regular as ArrowDownIcon,
} from "@fluentui/react-icons";

import styles from "./TimeCustomInput.module.css";

const DELAY_TIME = 300,
   HOLD_TIME = 50;

let delayTimeout, btnHoldingTimeout, documentListener;

function TimeCustomInput({
   inputSettings,
   handleArrowUpKey,
   handleArrowDownKey,
   handleDigitKeyPress,
}) {
   const [arrowBtnIsPressed, setArrowBtnIsPressed] = useState(false);

   useEffect(() => {
      if (arrowBtnIsPressed) {
         document.addEventListener("mouseup", arrowBtnUnclick, {
            once: true,
         });
         document.addEventListener("touchend", arrowBtnUnclick, {
            once: true,
         });
      }

      return () => {
         document.removeEventListener("mouseup", arrowBtnUnclick);
         document.removeEventListener("touchend", arrowBtnUnclick);
      };
   }, [arrowBtnIsPressed]);

   const handleKeyDown = (e) => {
      const arrowUpKey = e.key === "ArrowUp";
      const arrowDownKey = e.key === "ArrowDown";
      const isDigitKey = !isNaN(e.key);

      if (delayTimeout || btnHoldingTimeout) return;

      if (arrowUpKey) arrowBtnPress(handleArrowUpKey);
      if (arrowDownKey) arrowBtnPress(handleArrowDownKey);

      if (isDigitKey) handleDigitKeyPress && handleDigitKeyPress(e);
   };

   const arrowBtnPress = (action) => {
      if (!action) return;

      setArrowBtnIsPressed(true);

      action();

      delayTimeout = setTimeout(() => arrowBtnHold(action), DELAY_TIME);
   };

   const arrowBtnHold = (action) => {
      action();
      btnHoldingTimeout = setTimeout(() => arrowBtnHold(action), HOLD_TIME);
   };

   const arrowBtnUnclick = () => {
      clearTimeout(delayTimeout);
      clearTimeout(btnHoldingTimeout);
      delayTimeout = null;
      btnHoldingTimeout = null;
      setArrowBtnIsPressed(false);
   };

   const handleKeyUp = (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") arrowBtnUnclick();
   };

   return (
      <div className={styles.digits}>
         <CustomButton
            onMouseDown={(e) => {
               e.preventDefault();
               e.stopPropagation();
               e.returnValue = false;
               arrowBtnPress(handleArrowUpKey);
            }}
            onTouchStart={(e) => {
               e.stopPropagation();
               e.returnValue = false;
               arrowBtnPress(handleArrowUpKey);
            }}
            onContextMenu={(e) => e.preventDefault()}
            appearance="subtle"
            icon={<ArrowUpIcon />}
            tabIndex={-1}
         />
         <input
            {...inputSettings}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onContextMenu={(e) => e.preventDefault()}
         />
         <CustomButton
            onMouseDown={(e) => {
               e.preventDefault();
               e.stopPropagation();
               e.returnValue = false;
               arrowBtnPress(handleArrowDownKey);
            }}
            onTouchStart={(e) => {
               e.stopPropagation();
               e.returnValue = false;
               arrowBtnPress(handleArrowDownKey);
            }}
            onContextMenu={(e) => e.preventDefault()}
            appearance="subtle"
            icon={<ArrowDownIcon />}
            tabIndex={-1}
         />
      </div>
   );
}

export default TimeCustomInput;
