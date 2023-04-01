import React, { useState } from "react"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import Button from "../../Button/Button"
import { RiErrorWarningFill, RiErrorWarningLine } from "react-icons/ri"
import { IoIosWarning } from "react-icons/io"

const style: any = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 370,
  bgcolor: "#ffffff",
  boxShadow: 24,
}

interface AlertModalProps {
  open: boolean
  handleClose: () => void
  content: string
}

const AlertModal = ({ open, handleClose, content }: AlertModalProps) => {
  const handleCloseModal = () => {
    handleClose()
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal__wrapper" style={style}>
          <RiErrorWarningLine color="#d3d3d3" size={"60px"} />
          <Typography
            id="modal-modal-title"
            variant="h6"
            // component="h1"
            style={{ color: "black", fontSize: "1.1rem" }}
          >
            {content}
          </Typography>
          <Button
            addStyle={{
              fontSize: "0.9rem",
              width: "85%",
              height: "2.5rem",
              color: "#ffffff",
              background1: "#EB5252",
              borderRadius: "15px",
            }}
            contents="확인"
            onClick={handleCloseModal}
          />
        </div>
      </Modal>
    </div>
  )
}

export default AlertModal
