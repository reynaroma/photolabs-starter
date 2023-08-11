import React, { createContext, useContext, useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import MyContext from 'components/MyContext';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos }) => {

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter(id => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    }
  };

  return (
    <MyContext.Provider value={{ favorites, toggleFavorite }}>
      <div className="home-route">
        {/* Insert React */}
        <TopNavigation
          topics={topics}
        />
        <PhotoList
          photos={photos}
        />
      </div>
    </MyContext.Provider>
  );
};

export default HomeRoute;
