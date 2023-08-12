import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ isOpen, onClose, selectedPhoto }) => {
  if (!isOpen) return null;
  console.log(selectedPhoto);

  return (
    <div className="photo-details-modal">
      <button
      className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        {/* <img src={selectedPhoto.}/> */}
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
