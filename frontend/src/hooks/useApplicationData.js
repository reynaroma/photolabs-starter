import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {

    case ACTIONS.FAV_PHOTO_ADDED:
      if (state.favorites.includes(action.payload.id)) {
        return {
          ...state,
          favorites: state.favorites.filter((id) => id !== action.payload.id),
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload.id],
        };
      }
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload.photoData,
      }
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload.topicData
      }
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo
      }
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        modalOpen: !!action.payload.photo,
        selectedPhoto: action.payload.photo,
      }
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {

  const initialState = {
    modalOpen: false,
    selectedPhoto: null,
    favorites: [],
    photoData: [],
    topicData: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photoData: data }
        })
      })
      .catch((error) => {
        console.error(error);
      })
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_TOPIC_DATA,
          payload: { topicData: data }
        })
      })
      .catch((error) => {
        console.error(error);
      })
  })

  const openModal = (photo) => {
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: { photo }
    });
  }

  const closeModal = () => {
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: { photo: null }
    });
  }

  const updateToFavPhotoIds = (photoId) => {
    dispatch({
      type: ACTIONS.FAV_PHOTO_ADDED,
      payload: { id: photoId }
    })
  }

  return {
    ...state,
    openModal,
    closeModal,
    updateToFavPhotoIds
  };
};

export default useApplicationData;