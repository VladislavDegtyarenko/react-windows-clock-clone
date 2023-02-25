import { createContext, useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";

// Contexts
import ModalContext from "./ModalContext";
import NotificationsContext from "./NotificationsContext";

// UI
import TimerModalContent from "./../components/Timer/TimerModalContent";

// Web Worker Script
import worker_script from "./../components/Timer/timer-worker";

const TimerContext = createContext(null);

const defaultTimers = [
   {
      id: 1,
      name: "5 minutes",
      isRunning: false, // by default
      // time: 300000,
      initialTime: 300000,
      worker: null,
   },
   {
      id: 2,
      name: "10 minutes",
      isRunning: false, // by default
      // time: 600000,
      initialTime: 600000,
      worker: null,
   },
];

export const TimerContextProvider = (props) => {
   const [timers, setTimers] = useState(
      JSON.parse(localStorage.getItem("timers")) || defaultTimers
   );

   // const [timerSoundTitle, setTimerSoundTitle] = useState("Echo");
   const timerSoundTitle = "Echo";

   const { openModal, closeModal } = useContext(ModalContext);
   const notifications = useContext(NotificationsContext);

   useEffect(() => {
      // save timers data to localStorage
      const timersWithoutWorkerData = timers.map(({ worker, ...rest }) => rest);

      localStorage.setItem("timers", JSON.stringify(timersWithoutWorkerData));

      // if no timers, exit editing mode
      if (timers.length === 0) setEditingState(false);
   }, [timers]);

   const initTimerWorker = (timerId) => {
      setTimers((prevTimers) =>
         prevTimers.map((timer) => {
            if (timer.id !== timerId || timer.worker) return timer;

            const worker = new Worker(worker_script);

            worker.onmessage = ({ data }) => tickTimer(data);

            return { ...timer, worker };
         })
      );
   };

   const toggleStartTimer = (id) => {
      setTimers((prevTimers) =>
         prevTimers.map((timer) => {
            if (timer.id !== id) return timer;

            let updatedTimer = {
               isRunning: !timer.isRunning,
               time: timer.time || timer.initialTime,
            };

            timer.worker.postMessage({ ...updatedTimer, id });
            return { ...timer, ...updatedTimer };
         })
      );
   };

   const tickTimer = ({ id, time, isRunning }) => {
      console.log(time);
      setTimers((prevTimers) =>
         prevTimers.map((timer) => {
            return timer.id === id ? { ...timer, time, isRunning } : timer;
         })
      );

      if (time === 0) {
         const timerName = timers.filter((timer) => timer.id === id)[0].name;
         const timeNow = new Date().toLocaleTimeString("en", {
            timeStyle: "short",
         });

         notifications.show({
            title: "Timer done!",
            text: `${timerName}\n${timeNow}`,
            soundTitle: timerSoundTitle,
            loop: true,
         });
      }
   };

   const resetTimer = (id) => {
      setTimers((prevTimers) =>
         prevTimers.map((timer) => {
            if (timer.id !== id) return timer;

            let updatedTimer = {
               isRunning: timer.isRunning,
               time: timer.initialTime,
            };

            timer.worker.postMessage({ ...updatedTimer, id });
            return { ...timer, ...updatedTimer };
         })
      );
   };

   const saveTimerChanges = ({ id, name, timeRef }) => {
      const newTime = getTimeFromTimeRef(timeRef);

      setTimers((prevTimers) =>
         prevTimers.map((timer) => {
            return timer.id === id
               ? {
                    ...timer,
                    name,
                    time: newTime,
                    initialTime: newTime,
                    isRunning: false,
                 }
               : timer;
         })
      );

      resetTimer(id);
      closeModal();
   };

   const deleteTimer = (id) => {
      timers[id].worker.terminate();
      setTimers((prevTimer) => prevTimer.filter((timer) => timer.id !== id));
      closeModal();
   };

   const getTimeFromTimeRef = (timeRef) => {
      const hrs = timeRef.hours.current.value * 1000 * 60 * 60,
         mins = timeRef.minutes.current.value * 1000 * 60,
         secs = timeRef.seconds.current.value * 1000;

      return hrs + mins + secs;
   };

   const editTimer = ({ id, name, initialTime }) => {
      openModal(
         <TimerModalContent
            id={id}
            title="Edit timer"
            name={name}
            time={initialTime}
            onSave={saveTimerChanges}
            onCancel={closeModal}
            deleteTimer={deleteTimer}
         />
      );
   };

   const openAddNewTimerModal = () => {
      openModal(
         <TimerModalContent
            title={"Add new timer"}
            onSave={addNewTimer}
            onCancel={closeModal}
         />
      );
   };

   const addNewTimer = ({ name, timeRef }) => {
      const newTime = getTimeFromTimeRef(timeRef);

      setTimers((prevTimers) => [
         ...prevTimers,
         {
            id: nanoid(),
            name,
            time: newTime,
            initialTime: newTime,
            isRunning: false,
            worker: null,
         },
      ]);

      closeModal();
   };

   // for pencil icon button at the bottom-right corner
   const [editingState, setEditingState] = useState(false);

   const toggleEditTimers = () => setEditingState((s) => !s);

   const actions = {
      initTimerWorker,
      toggleStartTimer,
      tickTimer,
      resetTimer,
      editTimer,
      closeModal,
      saveTimerChanges,
      deleteTimer,
      setTimers,
      openAddNewTimerModal,
      toggleEditTimers,
   };

   const context = {
      timers,
      actions,
      editingState,
      timerSoundTitle,
   };

   return (
      <TimerContext.Provider value={context}>
         {props.children}
      </TimerContext.Provider>
   );
};

export default TimerContext;
