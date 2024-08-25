export const isNewApp = (createdAt: string) => {
  const createdAT = new Date(createdAt);
  const newTime = new Date();

  const timeDiff = newTime.getTime() - createdAT.getTime();

  return timeDiff / (1000 * 3600 * 24) < 7;
};
