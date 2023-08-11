import React, { useState } from 'react';

import 'mocks/photos';
import 'mocks/topics';
import './App.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {


  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} />
    </div>
  );
};

export default App;