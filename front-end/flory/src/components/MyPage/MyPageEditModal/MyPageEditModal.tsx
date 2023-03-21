import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Avatar from "../../common/Avatar/Avatar"
import BasicModal from "../../common/Modal/BasicModal"
import { SForm } from "./styles"
import { faUser } from "@fortawesome/free-solid-svg-icons"

const returnPickStatus = (idx: number, pickedIdx: number) => {
  if (idx === pickedIdx) return "pick"
  return ""
}

const MyPageEditModal = () => {
  const imgIdxList = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
  const [nickName, setNickName] = useState("")
  const [pickedIdx, setPickedIdx] = useState(0)

  const handlePickImg = (idx: number) => {
    setPickedIdx(idx)
  }

  return (
    <BasicModal modalButton={<button>프로필 변경</button>}>
      <h3>프로필 설정</h3>
      <SForm>
        <p>닉네임 변경</p>
        <div className="nickname__wrapper">
          <FontAwesomeIcon icon={faUser} />
          <input
            className="input__section"
            type="text"
            placeholder="전 닉네임"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <p>프로필 사진 변경</p>
        <div className="image__wrapper">
          {imgIdxList.map((item, idx) => {
            return (
              <span className="image__btn" onClick={() => handlePickImg(idx)}>
                <Avatar
                  imgIdx={item}
                  key={idx}
                  status={returnPickStatus(idx, pickedIdx)}
                />
              </span>
            )
          })}
        </div>
      </SForm>
    </BasicModal>
  )
}

export default MyPageEditModal
