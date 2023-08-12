import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ isOpen, onClose, selectedPhoto }) => {
  if (!isOpen || !selectedPhoto) return null;

  const similarPhotos = selectedPhoto.similar_photos;
  const similarPhotoKeys = Object.keys(similarPhotos);
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

        <img
          className='photo-details-modal__image'
          src={selectedPhoto.urls.full}
          alt={`Photo ${selectedPhoto.id}`}
        />
        <p className='photo-details-modal__header'>
          Similar Photos
        </p>
        <div className="photo-details-modal__images">
          <ul>
            {similarPhotoKeys.map((key) => {
              const similarPhoto = similarPhotos[key];
              return (
                <li key={key}>
                  <img
                    className="photo-details-modal__similar-image"
                    src={similarPhoto.urls.regular}
                    alt={`Similar Photo ${key}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
    </div>
  )
};

export default PhotoDetailsModal;
