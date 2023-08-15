import React from 'react';
import MyContext from 'components/MyContext';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    modalOpen,
    openModal,
    closeModal,
    selectedPhoto,
    favorites,
    updateToFavPhotoIds,
    photoData,
    topicData,
    fetchPhotosByTopic
  } = useApplicationData();

  return (

    <MyContext.Provider value={{ favorites, updateToFavPhotoIds }}>
      <div className="App">
        <HomeRoute
          topics={topicData}
          photos={photoData}
          openModal={openModal}
          onTopicClick={fetchPhotosByTopic}
        />
        <PhotoDetailsModal
          isOpen={modalOpen}
          onClose={closeModal}
          selectedPhoto={selectedPhoto}
        />
      </div>
    </MyContext.Provider>
  );
};

export default App;