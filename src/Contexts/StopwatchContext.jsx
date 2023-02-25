import { createContext, useState, useEffect } from "react";

let interval;

const StopwatchContext = createContext(null);

export const StopwatchContextProvider = (props) => {
   const [time, setTime] = useState(0); // in ms
   const [isRunning, setIsRunning] = useState(false);
   const [flags, setFlags] = useState([
      // { id: 1, time: 1400, total: 1400 },
      // { id: 2, time: 1600, total: 3000 },
      // { id: 3, time: 2100, total: 5100 },
      // { id: 4, time: 800, total: 5900 },
      // { id: 5, time: 700, total: 6600 },
      // { id: 6, time: 200, total: 6800 },
   ]);

   const TIMER_STEP = 100; // in ms

   const runStopwatch = () => {
      interval = setInterval(() => {
         setTime((t) => t + TIMER_STEP);
      }, TIMER_STEP);
   };

   useEffect(() => {
      if (isRunning) {
         runStopwatch();
         return () => clearInterval(interval);
      } else {
         setIsRunning(false);
         clearInterval(interval);
         return () => clearInterval(interval);
      }
   }, [isRunning]);

   const toggleStartStopwatch = () => {
      setIsRunning((s) => !s);
   };

   const resetStopwatch = () => {
      setIsRunning(false);
      setTime(0);
      setFlags([]);
   };

   const addFlag = () => {
      setFlags((prevFlags) => [
         ...prevFlags,
         {
            id: prevFlags.length + 1,
            total: time,
            time:
               prevFlags.length > 0
                  ? time - prevFlags[prevFlags.length - 1].total
                  : time,
         },
      ]);
   };

   const fullscreen = () => {
      console.log("Fullscreen Feature. Soon!");
   };

   const formatTime = (time) => {
      const hours = Math.floor(time / 1000 / 60 / 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const seconds = Math.floor((time / 1000) % 60);
      const milliseconds = (time / 100) % 10;

      const hh = twoDigits(hours);
      const mm = twoDigits(minutes);
      const ss = twoDigits(seconds);
      const ms = milliseconds;

      return `${hh}:${mm}:${ss}.${ms}`;
   };

   const twoDigits = (num) => (num < 10 ? "0" + num : num);

   const stopwatch = {
      time,
      isRunning,
      flags,
      actions: {
         toggleStartStopwatch,
         resetStopwatch,
         addFlag,
         fullscreen,
         formatTime,
      },
   };

   return (
      <StopwatchContext.Provider value={stopwatch}>
         {props.children}
      </StopwatchContext.Provider>
   );
};

export default StopwatchContext;
