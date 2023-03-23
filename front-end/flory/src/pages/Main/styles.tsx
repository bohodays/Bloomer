import styled from "styled-components";

export const SMain = styled.main<any>`
  width: 100%;
  height: 100%;
  background-color: #d7bede;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 80px;
    font-family: "Niconne";
    color: #ffffff;
    text-align: center;
    margin-top: 0;
    text-shadow: #2e2162 5px 4px 5px;
  }

  .btn__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .btn {
    width: 291.92px;
    height: 57px;
    background: rgba(255, 255, 255, 0.7);
    border: 3px solid #ffffff;
    /* filter: blur(4px); */
    border-radius: 30px;

    font-size: 20px;
    font-weight: bolder;
    color: #612fab;
    box-shadow: #ffffff 0px 0px 7px 2px;
  }
`;
