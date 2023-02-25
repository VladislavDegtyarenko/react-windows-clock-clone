const workercode = () => {
   const TIMER_STEP = 100; // in ms

   let timerInterval;

   const runTimer = (timer) => {
      timer.time = tickTimer(timer.time);

      if (timer.time <= 0) {
         clearInterval(timerInterval);
         timer.isRunning = false;
      }

      self.postMessage(timer);
   };

   const tickTimer = (time) => {
      return time > 0 ? time - TIMER_STEP : 0;
   };

   self.onmessage = ({ data: timer }) => {
      clearInterval(timerInterval);

      if (!timer.isRunning) return;

      if (timer.time <= 0) return;

      timerInterval = setInterval(() => runTimer(timer), TIMER_STEP);
   };
};

let code = workercode.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);

export default worker_script;
