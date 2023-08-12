import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ isOpen, onClose, selectedPhoto }) => {
  if (!isOpen || !selectedPhoto) return null;
  console.log(selectedPhoto);

  const similarPhotos = selectedPhoto.similar_photos;
  const similarPhotoKeys = Object.keys(similarPhotos);
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <img
          className='photo-details-modal__image'
          src={selectedPhoto.urls.full}
        />
        <p className='photo-details-modal__header'>
          Similar Photos
        </p>
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
