import { Checkbox } from "@fluentui/react-components";

import styles from "./CustomCheckbox.module.css";

function CustomCheckbox({ checked, label }) {
   return (
      <Checkbox checked={checked} label={label} className={styles.checkbox} />
   );
}

export default CustomCheckbox;
