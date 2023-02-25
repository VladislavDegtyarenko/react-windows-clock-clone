import { useState, createContext } from "react";

const ModalContext = createContext(null);

export const ModalContextProvider = ({ children }) => {
   // const [modalIsOpen, setModalIsOpen] = useState(false);
   const [modalContent, setModalContent] = useState(null);

   const openModal = (modalContent) => {
      // setModalIsOpen(true);
      setModalContent(modalContent);
   };

   const closeModal = () => {
      // setModalIsOpen(false);
      setModalContent(null);
      // fadeOutStopAudio();
   };

   const modal = {
      modalContent,
      openModal,
      closeModal,
   };

   return (
      <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
   );
};

export default ModalContext;
