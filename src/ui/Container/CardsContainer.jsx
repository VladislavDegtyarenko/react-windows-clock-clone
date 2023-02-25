import Container from ".";
import styles from "./Container.module.css";

function CardsContainer({ children }) {
   return <Container className={styles.cardsContainer}>{children}</Container>;
}

export default CardsContainer;
