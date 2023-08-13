/* eslint-disable react/jsx-key */
import React, { useContext } from "react"; // Import useContext
import PhotoListItem from "./PhotoListItem";
import MyContext from './MyContext'; // Import the context
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, openModal }) => {
  const { favorites, updateToFavPhotoIds } = useContext(MyContext); // Use the useContext hook

  const photoListItem = photos.map((photo) => {
    const isFavorited = favorites.includes(photo.id);

    return (
      <PhotoListItem
        onClick={() => openModal(photo)}
        key={photo.id}
        city={photo.location.city}
        country={photo.location.country}
        imageSource={photo.urls.regular}
        profile={photo.user.profile}
        name={photo.user.name}
        isFavorited={isFavorited}
        onToggleFavorite={() => updateToFavPhotoIds(photo.id)}
      />
    );
  });

  return <ul className="photo-list">{photoListItem}</ul>;
};

export default PhotoList;
