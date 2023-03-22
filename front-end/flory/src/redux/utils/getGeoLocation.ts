import useGeolocation from "react-hook-geolocation";

const useHandleClickDiaryIcon = () => {
  const geoLocation = useGeolocation();

  // const handleClickDiaryIcon = () => {
  //   handleMove("/diary");
  // };

  return geoLocation;
};

export default useHandleClickDiaryIcon;
