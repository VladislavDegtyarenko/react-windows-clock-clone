import AppMainBtnsContainer from "../../ui/AppMainBtnsContainer";

// import { Button } from "@fluentui/react-components";
import CustomButton from "../../ui/CustomButton/CustomButton";

import {
   Add16Regular as AddIcon,
   Edit16Regular as EditIcon,
} from "@fluentui/react-icons";

function TimerMainBtns({ openAddNewTimerModal, toggleEditTimers }) {
   return (
      <AppMainBtnsContainer>
         <CustomButton
            appearance="subtle"
            size="large"
            icon={<EditIcon />}
            onClick={toggleEditTimers}
         />
         <CustomButton
            appearance="subtle"
            size="large"
            icon={<AddIcon />}
            onClick={openAddNewTimerModal}
         />
      </AppMainBtnsContainer>
   );
}

export default TimerMainBtns;
