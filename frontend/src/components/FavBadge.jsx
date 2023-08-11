import React, { useState } from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = () => {

  const [fave, setFave] = useState(false);
  const handleClick = () => setFave(!fave);

  return (
    <div className='fav-badge'>
      <FavIcon
      selected={handleClick}
      displayAlert={fave}/>
    </div>
  ) 
};

export default FavBadge;