import { useContext, memo } from "react";

// Used Contexts
import TimerContext from "../Contexts/TimerContext.jsx";

// Components
import AppContainer from "../ui/Container/AppContainer.jsx";
import CardsContainer from "../ui/Container/CardsContainer.jsx";
import Timer from "../components/Timer/TimerCard";
import TimerMainBtns from "../components/Timer/TimerMainBtns";
import TimerModalContent from "./../components/Timer/TimerModalContent";
import NoTimersMessage from "../components/Timer/NoTimersMessage";

const TimerApp = () => {
   const { timers, actions, editingState } = useContext(TimerContext);

   return (
      <>
         <AppContainer motionDivKey="timer">
            <CardsContainer>
               {timers && timers.length > 0 ? (
                  timers.map((timer) => (
                     <Timer
                        key={timer.id}
                        id={timer.id}
                        timer={timer}
                        timerActions={actions}
                        timerEditingState={editingState}
                     />
                  ))
               ) : (
                  <NoTimersMessage />
               )}
            </CardsContainer>
         </AppContainer>
         <TimerMainBtns
            openAddNewTimerModal={actions.openAddNewTimerModal}
            toggleEditTimers={actions.toggleEditTimers}
         />
      </>
   );
};

export default TimerApp;
