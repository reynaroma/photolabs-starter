import React, { useContext } from 'react';

import MyContext from './MyContext';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'
import FavIcon from './FavIcon';

const TopNavigation = ({ topics }) => {
  const { favorites } = useContext(MyContext);
  const likedPhotoCount = favorites.length;

  const favoritePhotoIds = favorites.map((photoId) => (
    <span key={photoId}>{photoId}, </span>
  ));
  return (
    <div className="top-nav-bar">

      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className='top-nav-bar'>
        <TopicList topics={topics} />
        {likedPhotoCount > 0 ? (
          <FavIcon selected={true} displayAlert={true} />
        ) : (
          <FavBadge isFavorited={false} />
        )}
      </span>

    </div>
  )
}

export default TopNavigation;