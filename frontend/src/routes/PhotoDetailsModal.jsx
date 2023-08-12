import React, { useContext } from 'react';
import MyContext from 'components/MyContext';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ isOpen, onClose, selectedPhoto, openModal }) => {
  if (!isOpen || !selectedPhoto) return null;

  const similarPhotos = Object.values(selectedPhoto.similar_photos);
  const { favorites, toggleFavorite } = useContext(MyContext);

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
      <div className="photo-details-modal__images ">
        <div className="photo-details-modal__images">
          {/* Reuse the PhotoList component to display similar photos */}
          <PhotoList photos={similarPhotos} openModal={openModal} />
        </div>

      </div>
    </div>
  )
};

export default PhotoDetailsModal;
