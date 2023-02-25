import { lazy } from "react";

import { Dropdown, Option } from "@fluentui/react-components/unstable";

// const { Dropdown, Option } = lazy(() => import("@fluentui/react-components/unstable"));
import { AlertSnooze24Regular as SnoozeIcon } from "@fluentui/react-icons";

import styles from "./AlarmDropdown.module.css";

const DEFAULT_SNOOZE = "Disabled";

function AlarmSnoozeDropdown({ snooze, refs }) {
  const snoozeList = [
    { id: 0, name: "Disabled" },
    { id: 5, name: "5 minutes" },
    { id: 10, name: "10 minutes" },
    { id: 20, name: "20 minutes" },
    { id: 30, name: "30 minutes" },
    { id: 60, name: "1 hour" },
  ];

  return (
    <div className={styles["dropdown"]}>
      <div className={styles["dropdown__icon"]}>
        <SnoozeIcon />
      </div>
      <Dropdown
        className={styles["dropdown__menu"]}
        defaultSelectedOptions={[snooze || DEFAULT_SNOOZE]}
        ref={refs}
      >
        {snoozeList.map((snooze) => (
          <Option key={snooze.id}>{snooze.name}</Option>
        ))}
      </Dropdown>
    </div>
  );
}

export default AlarmSnoozeDropdown;
