import { getAllPhotos } from '../../api/files';

export const GET_PHOTOS = 'GET_PHOTOS';

const getPhotos = photos => ({ type: GET_PHOTOS, photos });

export const handleGetPhotos = () => dispatch => (
  getAllPhotos().then(photos => dispatch(getPhotos(photos)))
);
