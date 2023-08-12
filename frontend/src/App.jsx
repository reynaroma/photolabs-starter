import React, { useState } from 'react';

import 'mocks/photos';
import 'mocks/topics';
import './App.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useModal from 'hooks/useModal';

const App = () => {
  const { openModal, closeModal, modalOpen, selectedPhoto} = useModal();

  return (
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
  );
};

export default App;