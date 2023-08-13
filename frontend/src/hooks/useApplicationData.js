import { useState } from "react";

const useApplicationData = () => {
  const [favorites, setFavorites] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const updateToFavPhotoIds = (photoId) {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter(id => id !== photoId));
    } else {
      setFavorites([...setFavorites, photoId])
    }
  }

  const setPhotoSelected = (photo) => {
    setModalOpen(true);
    setSelectedPhoto(photo);
  }

  const onClosePhotoDetailsModal = () => {
    setModalOpen(false);
    setModalOpen(null);
  }

  return {
    state: {
      favorites,
      modalOpen,
      selectedPhoto
    },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  }
}

export default useApplicationData;