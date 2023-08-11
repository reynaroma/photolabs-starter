import React, { useState } from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavorited }) => {

  const [fave, setFave] = useState(false);
  const handleClick = () => setFave(!fave);

  return (
    <div className='fav-badge'>
      <FavIcon
      selected={isFavorited}
      displayAlert={isFavorited}/>
    </div>
  ) 
};

export default FavBadge;