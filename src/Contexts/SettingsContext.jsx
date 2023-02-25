import { createContext, useState, useEffect } from "react";

const SettingsContext = createContext(null);

const DEFAULT_THEME = "dark";

export const SettingsContextProvider = ({ children }) => {
   const [theme, setTheme] = useState(
      localStorage.getItem("theme") || DEFAULT_THEME
   );

   const settings = {
      theme,
      setTheme,
   };

   useEffect(() => {
      localStorage.setItem("theme", theme);
   }, [theme]);

   return (
      <SettingsContext.Provider value={settings}>
         {children}
      </SettingsContext.Provider>
   );
};

export default SettingsContext;
