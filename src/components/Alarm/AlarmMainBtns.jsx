import AppMainBtnsContainer from "../../ui/AppMainBtnsContainer";

import { Button } from "@fluentui/react-components";

import {
   Add16Regular as AddIcon,
   Edit16Regular as EditIcon,
} from "@fluentui/react-icons";

function AlarmMainBtns({ openAddNewAlarmModal, toggleEditAlarms }) {
   return (
      <AppMainBtnsContainer>
         <Button
            appearance="subtle"
            size="large"
            icon={<EditIcon />}
            onClick={toggleEditAlarms}
         />
         <Button
            appearance="subtle"
            size="large"
            icon={<AddIcon />}
            onClick={openAddNewAlarmModal}
         />
      </AppMainBtnsContainer>
   );
}

export default AlarmMainBtns;
