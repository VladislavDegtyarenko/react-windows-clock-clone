import React from "react";
import { createRoot } from "react-dom/client";

// Router
import { BrowserRouter } from "react-router-dom";

// Contexts
import { TimerContextProvider as TimerCtx } from "./Contexts/TimerContext";
import { AlarmContextProvider as AlarmCtx } from "./Contexts/AlarmContext";
import { StopwatchContextProvider as StopwatchCtx } from "./Contexts/StopwatchContext";
import { ModalContextProvider as ModalCtx } from "./Contexts/ModalContext";
import { AudioContextProvider as AudioCtx } from "./Contexts/AudioContext";
import { NotificationsContextProvider as NotificationsCtx } from "./Contexts/NotificationsContext";
import { SettingsContextProvider as SettingsCtx } from "./Contexts/SettingsContext";
import FluentUI from "./FluentUI";

import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
   <React.StrictMode>
      <SettingsCtx>
         <FluentUI>
            <BrowserRouter>
               <AudioCtx>
                  <NotificationsCtx>
                     <ModalCtx>
                        <TimerCtx>
                           <AlarmCtx>
                              <StopwatchCtx>
                                 <App />
                              </StopwatchCtx>
                           </AlarmCtx>
                        </TimerCtx>
                     </ModalCtx>
                  </NotificationsCtx>
               </AudioCtx>
            </BrowserRouter>
         </FluentUI>
      </SettingsCtx>
   </React.StrictMode>
);
// TODO:
// Navigation Toggle

// DONE:
// Modal Context
// Audio Context
// Alarm Context
// Transition between apps
// Better Icon Names (import as)
