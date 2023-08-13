import React from 'react';
import MyContext from 'components/MyContext';
import 'mocks/photos';
import 'mocks/topics';
import './App.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useModal from 'hooks/useModal';
import useFavorites from 'hooks/useFavorite';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    modalOpen,
    openModal,
    closeModal,
    selectedPhoto,
    favorites,
    updateToFavPhotoIds
  } = useApplicationData();
  
  return (

    <MyContext.Provider value={{ favorites, updateToFavPhotoIds }}>
      <div className="App">
        <HomeRoute
          topics={topics} photos={photos} openModal={openModal}
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