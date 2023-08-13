import React, { useContext } from 'react';
import MyContext from './MyContext';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = () => {

  const { favorites } = useContext(MyContext);

  const isFavorited = favorites.length > 0;

  return (
    <div className='fav-badge'>
      <FavIcon
        selected={!isFavorited}
        displayAlert={isFavorited} />
    </div>
  )
};

export default FavBadge;