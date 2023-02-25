import { useRef, useEffect } from "react";

import TimeCustomNumberSelect from "../TimeCustomInput/TimeCustomNumberSelect";
import TimeCustomAMPM from "../TimeCustomInput/TimeCustomAMPM";

import styles from "./TimeInputSection.module.css";

const TimeInputSection = ({ timeInputs, timeRef }) => {
  const timeInputSectionRef = useRef();

  const isFocused = (element) => document.activeElement === element;
  const focus = (element) => element?.focus();

  useEffect(() => {
    timeInputSectionRef.current.addEventListener("keydown", (e) => {
      const isArrowLeftPressed = e.key === "ArrowLeft";
      const isArrowRightPressed = e.key === "ArrowRight";

      if (!isArrowLeftPressed && !isArrowRightPressed) return;

      const hoursInputElement = timeRef.hours.current;
      const minutesInputElement = timeRef.minutes.current;
      const ampmInputElement = timeRef.ampm.current;

      // let arrow keys tab between digit inputs
      if (isArrowLeftPressed) {
        if (isFocused(minutesInputElement)) focus(hoursInputElement);
        if (isFocused(ampmInputElement)) focus(minutesInputElement);
      }

      if (isArrowRightPressed) {
        if (isFocused(minutesInputElement)) focus(ampmInputElement);
        if (isFocused(hoursInputElement)) focus(minutesInputElement);
      }
    });
  }, []);

  return (
    <div
      className={styles["TimeInputMenu"]}
      ref={timeInputSectionRef}
      onMouseDown={(e) => {
        e.returnValue = false;
      }}
      onTouchStart={(e) => {
        e.returnValue = false;
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className={styles["TimeInputMenu__inner"]}>
        {timeInputs.map(({ id, value, checked, minValue, maxValue }) => {
          return id === "ampm" ? (
            <TimeCustomAMPM key={id} id={id} checked={checked} inputRef={timeRef[id]} />
          ) : (
            <TimeCustomNumberSelect
              key={id}
              id={id}
              value={value}
              minValue={minValue}
              maxValue={maxValue}
              inputRef={timeRef[id]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TimeInputSection;
