import { FileSystem } from 'expo';

import { DIRECTORY_PHOTOS_NAME } from './camera';

// eslint-disable-next-line import/prefer-default-export
export const makeDirectoryPhotos = () => {
  FileSystem.getInfoAsync(DIRECTORY_PHOTOS_NAME).then(({ exists }) => {
    if (exists === false) {
      // Caso diretorio não foi criado.
      FileSystem.makeDirectoryAsync(DIRECTORY_PHOTOS_NAME).catch(error => error);
    }
  });
};

const formatURIPhotosWithDirectory = photos => photos.map(photo => `${DIRECTORY_PHOTOS_NAME}/${photo}`);

export const getAllPhotos = () => (
  FileSystem.readDirectoryAsync(DIRECTORY_PHOTOS_NAME).then(formatURIPhotosWithDirectory)
);
