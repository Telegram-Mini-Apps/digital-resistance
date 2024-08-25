export const generateAuthToken = () => {
  return Buffer.from(`${process.env.REACT_APP_TAPPS_NOTIFIER_USERNAME}:${process.env.REACT_APP_TAPPS_NOTIFIER_PASSWORD}`).toString('base64');
};
