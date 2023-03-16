import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginAction } from "../../../redux/modules/user"
import { localData } from "../../../redux/modules/user/token"
import { useAppDispatch } from "../../../redux/store.hooks"
import Button from "../../common/Button/Button"
import { SForm, SInput } from "./styles"

// mui
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

const UserLoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // 모달 상태 관리
  const [open, setOpen] = React.useState(false)
  const [errorInfo, setErrorInfo] = useState("")
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // 로그인
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 이메일을 입력하지 않았으면
    if (!email.trim().length) {
      setErrorInfo("이메일을 입력해주세요.")
      handleOpen()
    } else if (!password.trim().length) {
      setErrorInfo("비밀번호를 입력해주세요.")
      handleOpen()
    } else {
      const loginData = {
        email,
        password,
      }
      dispatch(loginAction(loginData)).then((response) => {
        console.log(response)
        if (response.type === "LOGIN/fulfilled") {
          localData.set("accessToken", response.payload.response.accessToken)
          localData.set("refreshToken", response.payload.response.refreshToken)
          navigate("/home")
        } else if (response.type === "LOGIN/rejected") {
          setErrorInfo(
            "존재하지 않는 이메일이거나 비밀번호가 일치하지 않습니다."
          )
          handleOpen()
        }
      })
    }
  }

  const style: any = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#ffffff",
    boxShadow: 24,
    // p: 3,
  }

  return (
    <>
      <SForm onSubmit={onSubmit}>
        <div className="input-wrapper">
          <FontAwesomeIcon
            className={email ? "icon active" : "icon"}
            icon={faEnvelope}
          />
          <SInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="이메일"
          />
        </div>
        <div className="input-wrapper">
          <FontAwesomeIcon
            className={password ? "icon active" : "icon"}
            icon={faLock}
          />
          <SInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <p className="moveToSignup" onClick={() => navigate("/signup")}>
          아직 계정이 없으신가요?
        </p>
        <Button
          type="submit"
          addStyle={{
            margin: "auto",
            fontSize: "1rem",
            width: "50%",
            height: "3rem",
            color: "#ffffff",
            background1: "rgb(101,182,255)",
            background2:
              "linear-gradient(90deg, rgba(101,182,255,1) 0%, rgba(139,92,246,1) 100%)",
            borderRadius: "24px",
            boxShadow: "5px 5px 5px 0px rgb(158 158 158)",
          }}
          contents="로그인"
          onClick={onSubmit}
        />
      </SForm>
      <div>
        {/* <div onClick={handleOpen}>Open modal</div> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modal__wrapper" style={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {errorInfo}
            </Typography>
            <Button
              addStyle={{
                // margin: "auto",
                fontSize: "1rem",
                width: "40%",
                height: "2.5rem",
                color: "#ffffff",
                background1: "#ff003e",
                borderRadius: "24px",
              }}
              contents="확인"
              onClick={handleClose}
            />
          </div>
        </Modal>
      </div>
    </>
  )
}

export default UserLoginForm
