import profile0 from "../../../assets/imgs/profile_icon/profile0.png";
import { SAvatar } from "./styles";

function Avatar({ size, status }: any): JSX.Element {
  return (
    <SAvatar size={size} status={status}>
      <img src={profile0} />
    </SAvatar>
  );
}
export default Avatar;
