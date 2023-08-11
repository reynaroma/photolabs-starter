import React from 'react';

import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics }) => {


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className='top-nav-bar'>
        <TopicList topics={topics}/>
        <FavBadge />
      </span>
    </div>
  )
}

export default TopNavigation;