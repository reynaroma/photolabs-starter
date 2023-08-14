import React, { useContext } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import MyContext from 'components/MyContext';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, openModal, onTopicClick }) => {
  return (
    <MyContext.Consumer>
      {context => (
        <div className="home-route">
          {/* Insert React */}
          <TopNavigation
            topics={topics}
            onTopicClick={onTopicClick}
          />
          <PhotoList
            photos={photos}
            openModal={openModal}
            context={context}
          />
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default HomeRoute;
