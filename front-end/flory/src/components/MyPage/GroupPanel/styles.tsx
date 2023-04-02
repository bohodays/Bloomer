import styled from "styled-components"

export const SGroupPanel = styled.div`
  .BrowseGroup {
    background: #f6efff;
    text-align: center;
    font-size: 0.8em;
    padding: 8px;
    cursor: pointer;
  }

  .icon_flower {
    width: 20px;
    height: 20px;
    margin-left: auto;
  }
`

export const SMember = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2px;
  .memberName {
    margin-left: 8px;
  }

  .deleteButton{
    padding: 7px;
    background: #ffb2b2;
  }  
`
