import { useRef, useContext, Suspense } from "react";
import styles from "./Modal.module.css";

import Loading from "../Loading";

// Framer Motion
import { motion } from "framer-motion";

import ModalContext from "../../Contexts/ModalContext";

function Modal(props) {
  const overlayRef = useRef();
  const modal = useContext(ModalContext);

  const closeHandler = (e) => {
    if (e.target == overlayRef.current) modal.closeModal();
  };

  return (
    <Suspense fallback={<Loading />}>
      <motion.div
        className={styles.modal}
        ref={overlayRef}
        onClick={closeHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={styles["modal__inner"]}
          initial={{ transform: "translateY(1em)" }}
          animate={{ transform: "translateY(0em)" }}
          transition={{ duration: 0.15 }}
          exit={{ transform: "translateY(1em)" }}
        >
          {props.children || "No modal content"}
        </motion.div>
      </motion.div>
    </Suspense>
  );
}

export default Modal;
