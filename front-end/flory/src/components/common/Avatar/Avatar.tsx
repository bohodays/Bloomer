import profile0 from "../../../assets/imgs/profile_icon/profile0.png";
import { SAvatar } from "./styles";

function Avatar({ size }: any): JSX.Element {
  return (
    <SAvatar size={size}>
      <img src={profile0} />
    </SAvatar>
  );
}
export default Avatar;
