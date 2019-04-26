import { FileSystem } from 'expo';

export const DIRECTORY_PHOTOS_NAME = `${FileSystem.documentDirectory}photos`;

const savePhoto = async (photo) => {
  await FileSystem.moveAsync({
    from: photo.uri,
    to: `${DIRECTORY_PHOTOS_NAME}/${Date.now()}.jpg`,
  });
};

export const takePhoto = (camera) => {
  if (camera) {
    camera.takePictureAsync({ onPictureSaved: savePhoto });
  }
};
