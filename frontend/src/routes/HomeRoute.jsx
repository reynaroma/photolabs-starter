import React, { createContext, useContext } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import MyContext from 'components/MyContext';
import useFavorites from 'hooks/useFavorite';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos }) => {
  const {favorites, toggleFavorite} = useFavorites();

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
