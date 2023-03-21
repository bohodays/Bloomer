import { SAvatar } from "./styles"

function Avatar({ size, status, imgIdx, onClick }: any): JSX.Element {
  const imgSrc = imgIdx
    ? require(`../../../assets/imgs/profile_icon/profile${imgIdx}.png`)
    : require(`../../../assets/imgs/profile_icon/profile0.png`)

  return (
    <SAvatar size={size} status={status} onClick={onClick}>
      <img src={imgSrc} />
    </SAvatar>
  )
}
export default Avatar
