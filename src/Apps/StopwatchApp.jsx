import { useContext } from "react";

import StopwatchContext from "../Contexts/StopwatchContext.jsx";

import AppContainer from "../ui/Container/AppContainer.jsx";
import Stopwatch from "../components/Stopwatch/index.jsx";

function StopwatchApp() {
   const stopwatch = useContext(StopwatchContext);

   return (
      <AppContainer motionDivKey="stopwatch">
         <Stopwatch stopwatch={stopwatch} />
      </AppContainer>
   );
}

export default StopwatchApp;
