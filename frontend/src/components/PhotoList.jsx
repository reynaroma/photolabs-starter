/* eslint-disable react/jsx-key */
import React, { useContext } from "react";

import MyContext from "./MyContext";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
  const { favorites, toggleFavorite } = useContext(MyContext);

  const photoListItem = photos.map((photo) => {
    const isFavorited = favorites.includes(photo.id);
    return (
      <PhotoListItem
        key={photo.id}
        city={photo.location.city}
        country={photo.location.country}
        imageSource={photo.urls.regular}
        profile={photo.user.profile}
        username={photo.user.username}
        isFavorited={isFavorited}
        onToggleFavorite={() => toggleFavorite(photo.id)} // Call toggleFavorite with photo ID
      />)
  })

  return (
    <ul className="photo-list">
      {photoListItem}
    </ul>
  );
};

export default PhotoList;
