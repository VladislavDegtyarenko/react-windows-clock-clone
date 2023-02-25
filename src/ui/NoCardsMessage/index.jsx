import styles from "./styles.module.css";

function NoCardsMessage({ icon, title, description }) {
   return (
      <div className={styles["no-cards"]}>
         {icon}
         <h2>{title}</h2>
         <p>{description}</p>
      </div>
   );
}

export default NoCardsMessage;
