import { useContext } from "react";

import SettingsContext from "../Contexts/SettingsContext.jsx";

import AppContainer from "../ui/Container/AppContainer.jsx";

import { RadioGroup, Radio, Label } from "@fluentui/react-components";

function Settings() {
   const { theme, setTheme } = useContext(SettingsContext);

   return (
      <AppContainer motionDivKey="settings">
         <Label id="theme">Theme</Label>
         <RadioGroup
            aria-labelledby="theme"
            onChange={(_, data) => setTheme(data.value)}
            value={theme}
         >
            <Radio value="light" label="Light" />
            <Radio value="dark" label="Dark" />
            <Radio value="system" label="System" />
         </RadioGroup>
      </AppContainer>
   );
}

export default Settings;
