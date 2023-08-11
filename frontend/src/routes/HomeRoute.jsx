import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos }) => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const toggleFavorite = (photoId) => {
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter((id) => id !== photoId));
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
    }
  }

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation
      topics={topics}
      favoritedPhotos={favoritedPhotos}
      />
      <PhotoList
      photos={photos}
      favoritedPhotos={favoritedPhotos}
      toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default HomeRoute;
