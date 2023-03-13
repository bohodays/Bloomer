import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SDrawer, Puller } from "./styles";

function BasicModal({ children }: any): JSX.Element {
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
    <Box sx={{ width: "100%", paddingTop: "30px" }} role="presentation">
      <Puller />
      {children}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>bottom</Button>
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
