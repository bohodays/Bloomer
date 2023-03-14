import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

export const SDrawer = styled(SwipeableDrawer)`
  width: 100%;
  border-radius: 50px 50px 0px 0px;
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
    border-radius: 50px 50px 0 0;
  }
`;

export const Puller = styled(Box)(({ theme }) => ({
  width: 50,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[400] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 16,
  bottom: 16,
}));

export const SModalContent = styled(Box)`
  width: 100%;
  padding: 30px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
