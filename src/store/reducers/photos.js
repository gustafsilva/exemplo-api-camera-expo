import {
  GET_PHOTOS,
} from '../actions/photos';

export const INIT_STATE = [];

const photosReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return action.photos;
    default:
      return state;
  }
};

export default photosReducer;
