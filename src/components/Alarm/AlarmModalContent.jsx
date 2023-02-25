import { useEffect, useRef, Suspense, lazy } from "react";
import Loading from "../../ui/Loading";
// import AlarmRepeatDays from "./AlarmRepeatDays";
const AlarmRepeatDays = lazy(() => import("./AlarmRepeatDays"));
// import TimeInputSection from "../../ui/TimeInputSection";
const TimeInputSection = lazy(() => import("../../ui/TimeInputSection"));
// import CustomInputText from "../../ui/CustomInputText";
const CustomInputText = lazy(() => import("../../ui/CustomInputText"));
// import CustomCheckbox from "../../ui/CustomCheckbox";
const CustomCheckbox = lazy(() => import("../../ui/CustomCheckbox"));

import ModalContent from "../../ui/Modal/ModalContent";

import AlarmSoundsDropdown from "./AlarmDropdownSounds";
import AlarmSnoozeDropdown from "./AlarmDropdownSnooze";

function AlarmModalContent({
  id,
  title,
  name = "Alarm",
  time = "00:00",
  enabled,
  repeatDays,
  soundTitle,
  snooze,
  onSave,
  onCancel,
  deleteTimer,
}) {
  const hoursRef = useRef(),
    minutesRef = useRef(),
    ampmRef = useRef();
  const inputRef = useRef();

  const repeatDayRefs = useRef([]);

  const soundRef = useRef();
  const snoozeRef = useRef();

  const timeRef = {
    hours: hoursRef,
    minutes: minutesRef,
    ampm: ampmRef,
  };

  const [hours, minutes] = time.split(":");
  const isPm = hours > 11;

  const twoDigits = (num) => (num < 10 ? "0" + num : num);

  const getAmPmHours = (hrs) => {
    return hrs < 1 ? 12 : hrs > 12 ? hrs % 12 : +hrs;
  };

  const get24HTimeString = ({ hh, mm, isPm }) => {
    const isAm = !isPm;
    hh = +hh;

    if (hh === 12 && isAm) hh = "00";
    else if (hh < 12 && isPm) hh = `${hh + 12}`;
    else hh = twoDigits(hh);

    return `${hh}:${mm}`;
  };

  const getRepeatDaysFromRefs = (ref) => {
    return {
      sunday: ref.current[0].checked,
      monday: ref.current[1].checked,
      tuesday: ref.current[2].checked,
      wednesday: ref.current[3].checked,
      thursday: ref.current[4].checked,
      friday: ref.current[5].checked,
      saturday: ref.current[6].checked,
    };
  };

  const timeInputs = [
    {
      id: "hours",
      value: getAmPmHours(hours),
      minValue: 1,
      maxValue: 12,
    },
    {
      id: "minutes",
      value: +minutes,
      minValue: 0,
      maxValue: 59,
    },
    {
      id: "ampm",
      checked: isPm,
    },
  ];

  const saveHandler = () => {
    const hh = hoursRef.current.value;
    const mm = minutesRef.current.value;
    const isPm = ampmRef.current.checked;

    const updatedRepeatDays = getRepeatDaysFromRefs(repeatDayRefs);

    onSave({
      id,
      name: inputRef.current.value,
      time: get24HTimeString({ hh, mm, isPm }),
      repeatDays: updatedRepeatDays,
      soundTitle: soundRef.current.textContent,
      snooze: snoozeRef.current.textContent,
    });
  };

  useEffect(() => {
    hoursRef.current?.focus();
  }, []);

  // temporarily
  const isRepeatAlarmChecked = true;

  /* const isRepeatAlarmChecked = Object.values(repeatDays).some(
      (dayIsRepeated) => dayIsRepeated
   ); */

  return (
    <ModalContent
      title={title}
      onDelete={() => deleteTimer(id)}
      onSave={saveHandler}
      onCancel={onCancel}
    >
      <Suspense fallback={<Loading />}>
        <TimeInputSection time={time} timeRef={timeRef} timeInputs={timeInputs} />
        <CustomInputText id={"Alarm Name"} text={name} inputRef={inputRef} />
        <div>
          <CustomCheckbox checked={isRepeatAlarmChecked} label="Repeat alarm" />
          <AlarmRepeatDays
            repeatDays={repeatDays}
            repeatDayRefs={repeatDayRefs}
            enabled={enabled}
          />
        </div>
        <AlarmSoundsDropdown soundTitle={soundTitle} refs={soundRef} />
        <AlarmSnoozeDropdown snooze={snooze} refs={snoozeRef} />
      </Suspense>
    </ModalContent>
  );
}

export default AlarmModalContent;
