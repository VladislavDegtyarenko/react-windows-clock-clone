import NoCardsMessage from "../../ui/NoCardsMessage";

import BellIcon from "../../assets/icons/BellIcon";

function NoAlarmsMessage() {
   return (
      <NoCardsMessage
         icon={<BellIcon />}
         title="You don't have any alarms."
         description='Select "+" below to add a new alarm.'
      />
   );
}

export default NoAlarmsMessage;
