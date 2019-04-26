import { Permissions } from 'expo';

// eslint-disable-next-line import/prefer-default-export
export const getPermissionCamera = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  return status;
};
