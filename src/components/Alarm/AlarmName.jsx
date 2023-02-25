import styles from "./AlarmStyles.module.css";

function AlarmName({ name, enabled }) {
   return (
      <div
         className={`${styles["alarm-card__name"]} ${
            !enabled ? styles["alarm-card__name--disabled"] : ""
         }`}
      >
         {name}
      </div>
   );
}

export default AlarmName;
