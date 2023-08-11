import React from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import 'mocks/photos';
import 'mocks/topics';
import './App.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import HomeRoute from 'routes/HomeRoute';

const App = () => {

  // const photos = Array.from(Array(3))

  return (
    <div className="App">
      {/* <TopNavigation topics={topics}/>
      <PhotoList photos={photos}/> */}
      <HomeRoute topics={topics} photos={photos}/>
    </div>
  );
};

export default App;