import React from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { city, country, imageSource, profile, username, isFavorited, onToggleFavorite, onClick} = props;
  /* Insert React */
  return (
    <div className="photo-list__item" >
      <PhotoFavButton
        isFavorited={isFavorited}
        onClick={onToggleFavorite}
      />
      <img
        className="photo-list__image"
        src={imageSource} alt="image" onClick={onClick}/>

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile} alt="user-profile" />
        <h6 className="photo-list__user-info">
          {username}</h6>
        <h6 className="photo-list__user-location">
          {city},
          {country}
        </h6>

      </div>

    </div>
  );
};

export default PhotoListItem;
