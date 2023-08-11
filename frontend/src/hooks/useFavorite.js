import { useState } from "react";

const useFavorites = () => {
  const [favorites, setFavorites ] = useState([]);

  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter(id => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  }

  return {
    favorites,
    toggleFavorite
  };
};

export default useFavorites;