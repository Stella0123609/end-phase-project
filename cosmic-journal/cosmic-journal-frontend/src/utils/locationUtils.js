export const validateCoordinates = (latitude, longitude) => {
  const latValid = latitude >= -90 && latitude <= 90;
  const lonValid = longitude >= -180 && longitude <= 180;
  return latValid && lonValid;
};