import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive(!active);

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div
      className="photo-list__fav-icon-svg"
      >
        {/* Insert React */}
        <FavIcon selected={active} displayAlert={active}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;