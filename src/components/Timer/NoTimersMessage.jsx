import NoCardsMessage from "../../ui/NoCardsMessage";

import { TimerOff24Regular as NoTimersIcon } from "@fluentui/react-icons";

function NoTimersMessage() {
   return (
      <NoCardsMessage
         icon={<NoTimersIcon />}
         title="You don't have any timers."
         description='Select "+" below to add a new timer.'
      />
   );
}

export default NoTimersMessage;
