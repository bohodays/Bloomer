import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/system";

export const StyledSendIcon = styled(SendIcon, {
  name: "StyledHomeIcon",
  slot: "Wrapper",
})({
  cursor: "pointer",
  color: "#dec5fd",
  "&:hover": { color: "#9a1aff" },
});
