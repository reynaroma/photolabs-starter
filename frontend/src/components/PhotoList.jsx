/* eslint-disable react/jsx-key */
import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {

  const photoListItem = photos.map((photo) => {
    return (
    <PhotoListItem
      key={photo.id}
      city={photo.location.city}
      country={photo.location.country}
      imageSource={photo.urls.regular}
      profile={photo.user.profile}
      username={photo.user.username}
    />)
  })

  return (
    <ul className="photo-list">
      {photoListItem}
    </ul>
  );
};

export default PhotoList;
