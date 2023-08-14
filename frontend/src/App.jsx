import React from 'react';
import MyContext from 'components/MyContext';
import 'mocks/photos';
import 'mocks/topics';
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
    topicData
  } = useApplicationData();
  
  return (

    <MyContext.Provider value={{ favorites, updateToFavPhotoIds }}>
      <div className="App">
        <HomeRoute
          topics={topicData}
          photos={photoData}
          openModal={openModal}
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