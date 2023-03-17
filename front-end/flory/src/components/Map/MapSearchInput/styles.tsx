import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const SPaper = styled(Paper)`
  padding: 0.125rem 0.25rem;
  display: flex;
  align-items: center;
  border-radius: 12px !important;
  .input-base {
    margin-left: 0.5rem;
    flex-grow: 1;
  }
  .btn {
    padding: 0.5rem;
  }
  .divider {
    margin: 0.25rem;
    height: 1.8rem;
  }
`;
