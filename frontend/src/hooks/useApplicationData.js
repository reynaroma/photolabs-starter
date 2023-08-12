import { useState } from "react";

const useApplicationData = () => {
  const [favorites, setFavorites] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter(id => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  }

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalOpen(false);
  };

  return {
    state: {
      favorites,
      modalOpen,
      selectedPhoto,
    },
    actions: {
      setFavorites,
      setModalOpen,
      selectedPhoto,
      openModal,
      closeModal,
      toggleFavorite
    }
  }
};

export default useApplicationData;