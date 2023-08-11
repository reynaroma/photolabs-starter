import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import { FavoritesProvider } from 'components/FavoriteContext';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos }) => {

  return (
    <FavoritesProvider>
      <div className="home-route">
        {/* Insert React */}
        <TopNavigation
          topics={topics}
        />
        <PhotoList
          photos={photos}
        />
      </div>
    </FavoritesProvider>
  );
};

export default HomeRoute;
