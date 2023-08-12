import { useState } from "react";

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalOpen(false);
  }

  return {
    modalOpen,
    openModal,
    closeModal
  };
};

export default useModal;