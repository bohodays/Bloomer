import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

export const SMain = styled.main<any>`
  display: flex;
  gap: 12px;

  .flower-image-border {
    background-color: #ffe897;
    border-radius: 50%;
    height: 50px;
    padding: 7px;
    border: 3px solid #ececec;
    position: relative;
    z-index: -1;
  }

  .line {
    position: absolute;
    border-left: 3px solid #ececec;
    height: 130px;
    z-index: -4;
    left: 45px;
    overflow-y: hidden;
  }
`

export const SItem = styled.div<any>`
  display: flex;
  gap: 15px;
  align-items: center;
  z-index: -2;

  background-color: ${(props) => (props.isDiaryPage ? "#f6f2ff" : "white")};
  margin-bottom: 17px;
  border-radius: 18px;
  padding: 0.9rem;

  .flower-image {
    background-color: #ffe897;
    border-radius: 50%;
    height: 40px;
    padding: 7px;
  }

  .title-container {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 7px;
  }

  .content-container {
    font-size: 0.5rem;
    line-height: 20px;
    margin-bottom: 7px;
  }

  .info-container {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
    color: #8a8a8a;
    font-size: 0.4rem;
    .comment-section {
      display: flex;
      gap: 0.3rem;
      align-items: center;
    }
  }
`

export const SIcon = styled(FontAwesomeIcon)`
  color: #8a8a8a;
  height: 0.7rem;
  z-index: -1;
`
