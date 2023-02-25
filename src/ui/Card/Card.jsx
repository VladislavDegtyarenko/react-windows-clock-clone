import styles from "./Card.module.css";

function Card({ children, className, onClick, refs, disableHover }) {
   return (
      <div
         className={`${styles.card} ${className} ${!disableHover ? styles['card--hover'] : ""}`}
         onClick={onClick}
         ref={refs}
      >
         {children}
      </div>
   );
}

export default Card;
