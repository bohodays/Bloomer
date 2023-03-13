import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// .app에 맞춰 범위 설정
const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiBackdrop-root {
    position: relative;
    margin: auto;
    width: 100%;
    height: 100%;
    max-width: 480px;
  }
  .MuiPaper-root {
    margin: auto;
    width: 100%;
    max-width: 480px;
  }
`;

// Puller 회색 작대기
const Puller = styled(Box)(({ theme }) => ({
  width: 50,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[400] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 16,
  bottom: 16,
  left: "calc(50% - 15px)",
}));

function Modal({ children }: any): JSX.Element {
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
      <StyledSwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{ width: "100%" }}
      >
        {ModalContent}
      </StyledSwipeableDrawer>
    </div>
  );
}

export default Modal;
