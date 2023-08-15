import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import MyContext from 'components/MyContext';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, openModal, onTopicClick }) => {
  return (
    <MyContext.Consumer>
      {context => (
        <div className="home-route">
          <TopNavigation
            topics={topics}
            onTopicClick={onTopicClick}
          />
          <PhotoList
            photos={photos}
            openModal={openModal}
          />
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default HomeRoute;
