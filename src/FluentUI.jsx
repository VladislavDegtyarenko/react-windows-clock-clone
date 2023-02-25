import { useContext } from "react";

import SettingsContext from "./Contexts/SettingsContext";

// Microsoft Fluent UI React Library
import {
   FluentProvider,
   webDarkTheme,
   webLightTheme,
} from "@fluentui/react-components";

function FluentUI({ children }) {
   const { theme } = useContext(SettingsContext);

   let fluentTheme;

   switch (theme) {
      case "light":
         fluentTheme = webLightTheme;
         break;

      case "dark":
         fluentTheme = webDarkTheme;
         break;

      case "system":
         const isSystemLightTheme = window.matchMedia(
            "(prefers-color-scheme: light)"
         )?.matches;
         fluentTheme = isSystemLightTheme ? webLightTheme : webDarkTheme;
   }
   return <FluentProvider theme={fluentTheme}>{children}</FluentProvider>;
}

export default FluentUI;
