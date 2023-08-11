import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavorited, onClick }) {
  // const [active, setActive] = useState(false);
  // const handleClick = () => setActive(!active);

  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div
      className="photo-list__fav-icon-svg"
      >
        {/* Insert React */}
        <FavIcon selected={isFavorited}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;