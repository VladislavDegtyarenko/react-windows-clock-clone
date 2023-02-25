import { useState, useEffect } from "react";

import AppContainer from "../ui/Container/AppContainer.jsx";


import WorldClock from "../components/WorldClock/index.jsx";

function WorldClockApp() {
   return (
      <AppContainer motionDivKey="world">
         <WorldClock />
      </AppContainer>
   );
}

export default WorldClockApp;
