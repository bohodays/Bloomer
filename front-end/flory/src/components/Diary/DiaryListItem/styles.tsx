import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

export const SMain = styled.main<any>`
  width: 100%;
  display: flex;
  gap: 0.3rem;

  /* .page-flower__wrapper {
    position: relative;
    z-index: -10;
  } */

  .flower-image-border {
    background-color: #ffe897;
    border-radius: 50%;
    height: 2.3rem;
    padding: 0.4rem;
    border: 3px solid #ececec;
    z-index: -1;
  }

  /* & .line { */
  /* position: absolute; */
  /* border-left: 4px solid #ececec; */
  /* height: 130px; */
  /* z-index: -4; */
  /* left: 1.15rem; */
  /* overflow-y: hidden; */
  /* } */
`

export const SItem = styled.div<any>`
  flex: auto;
  display: flex;
  gap: 1rem;
  align-items: center;
  z-index: -2;

  background-color: #f6f2ff;
  margin-bottom: 1.2rem;
  border-radius: 18px;
  padding: 0.9rem;

  .flower-image {
    background-color: #ffe897;
    border-radius: 50%;
    height: 3rem;
    padding: 7px;
  }

  .title-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }

  .content-container {
    width: 100%;
    margin-bottom: 0.4rem;

    font-size: 0.5rem;
    line-height: 1.25rem;
    /* 줄바꿈 관련 */
    /* word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; */
    margin: 0;
  }

  .info-container {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
    color: #8a8a8a;
    font-size: 0.4rem;

    .comment-section {
      display: flex;
      gap: 0.2rem;
    }
  }
`

export const SIcon = styled(FontAwesomeIcon)`
  color: #8a8a8a;
  height: 0.7rem;
  z-index: -1;
`
