import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
