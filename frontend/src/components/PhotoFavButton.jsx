import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavorited, onClick }) {

  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div
        className="photo-list__fav-icon-svg"
      >
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;