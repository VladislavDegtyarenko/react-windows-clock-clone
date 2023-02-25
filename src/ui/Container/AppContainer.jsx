// Styles
import styles from "./Container.module.css";

// Framer Motion
import { motion } from "framer-motion";

function AppContainer({ children, motionDivKey }) {
   return (
      <motion.div
         key={motionDivKey}
         className={styles.appContainer}
         initial={{ opacity: 0.5, transform: "translateY(1em)" }}
         animate={{ opacity: 1, transform: "translateY(0em)" }}
         transition={{ duration: 0.15 }}
         exit={{ opacity: 0.5, transform: "translateY(1em)" }}
      >
         {children}
      </motion.div>
   );
}

export default AppContainer;
