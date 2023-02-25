import { useRef, Suspense } from "react";

import { useEffectOnce } from "../../hooks/UseEffectOnes";

import CustomButton from "../CustomButton/CustomButton";

import Loading from "../Loading";

// Icons
import {
  Save16Regular as SaveIcon,
  Dismiss16Regular as CancelIcon,
  Delete16Regular as DeleteIcon,
} from "@fluentui/react-icons";

// Styles
import styles from "./Modal.module.css";

function ModalContent({ title, children, onDelete, onSave, onCancel }) {
  const modalContentRef = useRef();

  const firstFocusableElement = useRef(),
    lastFocusableElement = useRef();

  // TODO: replace document.activeElement with refs
  const isFocused = (element) => document.activeElement === element;

  // const focusElement = (element) => element.focus();

  useEffectOnce(() => {
    // key press handler
    modalContentRef.current.addEventListener("keydown", (e) => {
      const isTabPressed = e.key === "Tab" || e.keyCode === 9;
      const isEnterPressed = e.key === "Enter" || e.keyCode === 13;
      const isEscapePressed = e.key === "Escape" || e.keyCode === 27;

      if (!isTabPressed && !isEnterPressed && !isEscapePressed) return;

      // enter key
      if (isEnterPressed) onSave();

      // escape key
      if (isEscapePressed) closeModal();

      // shift + tab
      if (e.shiftKey) {
        if (isFocused(firstFocusableElement.current)) {
          e.preventDefault();
          lastFocusableElement.current?.focus();
        }
      } else {
        // tab
        if (isFocused(lastFocusableElement.current)) {
          e.preventDefault();
          firstFocusableElement.current?.focus();
        }
      }
    });
  }, []);

  return (
    <div className={styles["modal-content"]} ref={modalContentRef}>
      <Suspense fallback={<Loading />}>
        <header>
          <h3>{title}</h3>
          {onDelete && (
            <CustomButton
              appearance="subtle"
              shape="rounded"
              className={styles["modal-delete"]}
              onClick={onDelete}
              refs={firstFocusableElement}
            >
              <DeleteIcon />
            </CustomButton>
          )}
        </header>
        <main>{children || "No Content Provided"}</main>
        <footer>
          <CustomButton onClick={onSave} icon={<SaveIcon />} appearance="primary">
            Save
          </CustomButton>

          <CustomButton
            onClick={onCancel}
            icon={<CancelIcon />}
            refs={lastFocusableElement}
          >
            Cancel
          </CustomButton>
        </footer>
      </Suspense>
    </div>
  );
}

export default ModalContent;
