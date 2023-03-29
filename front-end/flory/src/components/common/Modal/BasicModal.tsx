import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Button from "../Button/Button";
import { SDrawer, Puller, SModalContent } from "./styles";

function BasicModal({
  children,
  modalButton,
  dispatchAction,
}: any): JSX.Element {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    // setOpen(false);
    if (dispatchAction) {
      dispatchAction().then((res: boolean) => {
        if (res) {
          setOpen(false);
        }
      });
    } else {
      setOpen(false);
    }
  };

  const ModalContent = (
    <SModalContent role="presentation">
      <Puller />
      {children}
      <Button
        // type="submit"
        onClick={handleClick}
        addStyle={{
          margin: "auto",
          fontSize: "1rem",
          width: "320px",
          height: "3rem",
          color: "#ffffff",
          background1: "rgb(101,182,255)",
          background2:
            "linear-gradient(90deg, rgba(101,182,255,1) 0%, rgba(139,92,246,1) 100%)",
          borderRadius: "24px",
        }}
        contents="확인"
      />
    </SModalContent>
  );

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  return (
    <div>
      <div onClick={toggleDrawer(true)}>{modalButton}</div>
      <SDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {ModalContent}
      </SDrawer>
    </div>
  );
}

export default BasicModal;
