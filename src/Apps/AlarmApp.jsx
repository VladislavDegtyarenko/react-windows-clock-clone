import { useContext } from "react";

// Contexts
import AlarmContext from "../Contexts/AlarmContext";

// UI
import AlarmCard from "../components/Alarm/AlarmCard";
import AlarmMainBtns from "../components/Alarm/AlarmMainBtns";
import AppContainer from "../ui/Container/AppContainer";
import CardsContainer from "../ui/Container/CardsContainer";
import NoAlarmsMessage from "../components/Alarm/NoAlarmsMessage";

const AlarmApp = () => {
   const { alarms, alarmActions, editingState, audio } =
      useContext(AlarmContext);

   return (
      <>
         <AppContainer motionDivKey="alarm">
            <CardsContainer>
               {alarms?.length > 0 ? (
                  alarms.map((alarm) => (
                     <AlarmCard
                        key={alarm.id}
                        alarm={alarm}
                        alarmActions={alarmActions}
                        audio={audio}
                        alarmEditingState={editingState}
                     />
                  ))
               ) : (
                  <NoAlarmsMessage />
               )}
            </CardsContainer>
         </AppContainer>
         <AlarmMainBtns
            openAddNewAlarmModal={alarmActions.openAddNewAlarmModal}
            toggleEditAlarms={alarmActions.toggleEditAlarms}
         />
      </>
   );
};

export default AlarmApp;
