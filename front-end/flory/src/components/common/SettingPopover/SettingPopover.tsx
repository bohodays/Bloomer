import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { IconButton, ListItemButton, ListItemText } from "@mui/material";
import MoreVert from "@mui/icons-material/MoreVert";
import { StyledMoreVertIcon } from "../StyledIcons/styledIcons";

// export default function
const SettingPopover = ({
  editAction,
  deleteAction,
  color,
}: any): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleEdit = () => {
    editAction();
    setAnchorEl(null);
  };
  const handleDelete = () => {
    deleteAction();
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton onClick={handleClick} size="small">
        {(color = "purple" ? <StyledMoreVertIcon /> : <MoreVert />)}
      </IconButton>

      <Popover
        elevation={1}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ListItemButton onClick={handleEdit} dense>
          {/* <ListItemText primary="Spam" /> */}
          <p style={{ fontSize: "10px" }}>수정</p>
        </ListItemButton>
        <ListItemButton onClick={handleDelete}>
          {/* <ListItemText primary="Spam" /> */}
          <p>삭제</p>
        </ListItemButton>
      </Popover>
    </div>
  );
};

export default SettingPopover;
