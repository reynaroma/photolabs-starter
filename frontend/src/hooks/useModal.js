import { useState } from "react";

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (i) => {
    console.log(i.target);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  }

  return {
    modalOpen,
    openModal,
    closeModal
  };
};

export default useModal;