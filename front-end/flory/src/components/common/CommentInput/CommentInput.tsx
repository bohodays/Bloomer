import React from "react";
import Avatar from "../Avatar/Avatar";
import { STextarea, SDiv } from "./styles";
import TextareaAutosize from "react-textarea-autosize";
import SendIcon from "@mui/icons-material/Send";
import { StyledSendIcon } from "../StyledIcons/styledIcons";
import { IconButton } from "@mui/material";

function CommentInput({
  contentInput,
  placeholder,
  createCommentHandler,
  page,
}: any): JSX.Element {
  return (
    <SDiv>
      <div className="avatar wrapper">
        <Avatar size="small" status="comment" />
      </div>
      <STextarea>
        <div className="txt wrapper">
          <TextareaAutosize
            className="inputArea"
            placeholder={placeholder}
            maxRows={3}
            ref={contentInput}
          />
        </div>
      </STextarea>
      <div className="icon wrapper">
        <StyledSendIcon onClick={createCommentHandler} />
      </div>
    </SDiv>
  );
}

export default CommentInput;
