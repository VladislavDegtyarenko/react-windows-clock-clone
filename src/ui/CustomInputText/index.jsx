import { Input } from "@fluentui/react-components";
import { Edit16Regular as Icon } from "@fluentui/react-icons";

import styles from "./CustomInputText.module.css";

function InputText({ id, text, className, inputRef }) {
   return (
      <div className={`${styles["input-container"]} ${className}`}>
         <div className={styles["input-container__img"]}>
            <Icon />
         </div>
         <Input
            id={id || ""}
            defaultValue={text || ""}
            className={styles["input-container__input"]}
            placeholder="Enter your text here..."
            ref={inputRef}
         />
      </div>
   );
}

export default InputText;
