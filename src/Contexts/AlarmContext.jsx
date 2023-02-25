import { useState, useEffect, createContext, useContext } from "react";
import { nanoid } from "nanoid";

// Used Contexts
import ModalContext from "./ModalContext";

// UI
import AlarmModalContent from "../components/Alarm/AlarmModalContent";

const AlarmContext = createContext(null);

const defaultAlarms = [
  {
    id: 1,
    enabled: true,
    name: "Good morning",
    time: "07:00",
    repeatDays: {
      sunday: true,
      monday: false,
      tuesday: false,
      wednesday: true,
      thursday: false,
      friday: true,
      saturday: false,
    },
    soundTitle: "Xylophone",
    snooze: "5 minutes",
  },
  {
    id: 2,
    enabled: false,
    name: "Gym",
    time: "18:00",
    repeatDays: {
      sunday: false,
      monday: true,
      tuesday: false,
      wednesday: true,
      thursday: false,
      friday: false,
      saturday: true,
    },
  },
  {
    id: 3,
    enabled: false,
    name: "📝 Daily Notes",
    time: "22:05",
    repeatDays: {
      sunday: false,
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
    },
  },
];

export const AlarmContextProvider = ({ children }) => {
  const [alarms, setAlarms] = useState(
    JSON.parse(localStorage.getItem("alarms")) || defaultAlarms
  );

  const { openModal, closeModal } = useContext(ModalContext);

  // for pencil icon button at the bottom-right corner
  const [editingState, setEditingState] = useState(false);

  useEffect(() => {
    // save alarms data to localStorage
    localStorage.setItem("alarms", JSON.stringify(alarms));

    // if no alarms, exit editing mode
    if (alarms.length === 0) setEditingState(false);
  }, [alarms]);

  const toggleAlarm = (id) => {
    setAlarms((prevAlarms) =>
      prevAlarms.map((alarm) => {
        return alarm.id === id ? { ...alarm, enabled: !alarm.enabled } : alarm;
      })
    );
  };

  const saveAlarmChanges = ({ id, name, time, repeatDays }) => {
    setAlarms((prevAlarms) =>
      prevAlarms.map((alarm) => {
        return alarm.id === id ? { ...alarm, name, time, repeatDays } : alarm;
      })
    );

    closeModal();
  };

  const deleteAlarm = (id) => {
    setAlarms((prevAlarms) => prevAlarms.filter((alarm) => alarm.id !== id));
    closeModal();
  };

  const editAlarm = ({ id, time, name, enabled, repeatDays, soundTitle, snooze }) => {
    openModal(
      <AlarmModalContent
        id={id}
        title="Edit alarm"
        time={time}
        name={name}
        enabled={enabled}
        repeatDays={repeatDays}
        soundTitle={soundTitle}
        snooze={snooze}
        onSave={saveAlarmChanges}
        onCancel={closeModal}
      />
    );
  };

  const openAddNewAlarmModal = () => {
    openModal(
      <AlarmModalContent
        title={"Add new alarm"}
        repeatDays={{
          sunday: false,
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
        }}
        onSave={addNewAlarm}
        onCancel={closeModal}
      />
    );
  };

  const addNewAlarm = ({ name, time, repeatDays, soundTitle, snooze }) => {
    setAlarms((prevAlarms) => [
      ...prevAlarms,
      {
        id: nanoid(),
        enabled: true,
        name,
        time,
        repeatDays,
        soundTitle,
        snooze,
      },
    ]);

    closeModal();
  };

  const toggleEditAlarms = () => setEditingState((s) => !s);

  const alarmActions = {
    toggleAlarm,
    editAlarm,
    closeModal,
    saveAlarmChanges,
    addNewAlarm,
    deleteAlarm,
    openAddNewAlarmModal,
    toggleEditAlarms,
  };

  const alarm = {
    alarms,
    alarmActions,
    editingState,
  };

  return <AlarmContext.Provider value={alarm}>{children}</AlarmContext.Provider>;
};

export default AlarmContext;
