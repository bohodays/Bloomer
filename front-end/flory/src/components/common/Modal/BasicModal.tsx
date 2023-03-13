import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SDrawer, Puller, SModalContent } from "./styles";

function BasicModal({ children, modalButton }: any): JSX.Element {
  const [open, setOpen] = React.useState(false);

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

  const ModalContent = (
    <SModalContent role="presentation">
      <Puller />
      {children}
    </SModalContent>
  );

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
