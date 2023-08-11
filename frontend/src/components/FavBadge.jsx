import React, { useState } from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {

  const [fave, setFave] = useState(false);
  const handleClick = () => setFave(!fave);

  return (
    <div className='fav-badge'>
      <FavIcon
      selected={handleClick}
      displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;