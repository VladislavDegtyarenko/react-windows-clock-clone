import styles from "./styles.module.css";

function AppMainBtnsContainer(props) {
   return (
      <div className={styles["app-main-btns-container"]}>{props.children}</div>
   );
}

export default AppMainBtnsContainer;
