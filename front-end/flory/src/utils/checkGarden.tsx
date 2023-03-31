import { Navigate } from "react-router-dom";
import { localData } from "../redux/modules/user/token";
import { useAppSelector } from "../redux/store.hooks";

const checkGarden = (props: any) => {
  return localStorage.getItem("newGarden") === "No" ? (
    props
  ) : (
    <Navigate to="/gardenTheme" />
  );
};

export default checkGarden;
