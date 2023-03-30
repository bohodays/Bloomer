import * as React from "react"
import Popover from "@mui/material/Popover"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import { IconButton, ListItemButton, ListItemText } from "@mui/material"
import MoreVert from "@mui/icons-material/MoreVert"
import { StyledMoreVertIcon } from "../StyledIcons/styledIcons"
import BasicModal from "../Modal/BasicModal/BasicModal"
import { FormControlLabel, FormGroup, Radio } from "@mui/material"
import GroupItems from "../../Diary/GroupItems/GroupItems"
import { useAppDispatch, useAppSelector } from "../../../redux/store.hooks"
import { modifyDiaryAction } from "../../../redux/modules/diary"

// export default function
const SettingPopover = ({
  editAction,
  deleteAction,
  color,
  setIsOpenModal,
  group,
  groupSetting,
  setGroupSetting,
  selectedGroupIds,
  setSelectedGroupIds,
  diary,
}: any): JSX.Element => {
  let currentDiary: any
  if (diary) {
    currentDiary = {
      id: diary.id,
      content: diary.content,
      imgSrc: diary.imgSrc,
      lat: diary.lat,
      lng: diary.lng,
      publicStatus: diary.publicStatus,
      groupList: diary.groupList,
      fid: diary.flowerEmotion.fid,
      x: diary.x,
      y: diary.y,
      z: diary.z,
      gid: diary.garden.id,
      musicTitle: diary.musicTitle,
      address: diary.address,
    }
  }

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [selectedValue, setSelectedValue] = React.useState("a")
  const openRef = React.useRef<any>()
  const dispatch = useAppDispatch()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined
  const handleEdit = () => {
    editAction()

    // if (setIsOpenModal) {
    //   setIsOpenModal(true);
    // }
    // setIsOpenModal(false);

    setAnchorEl(null)
    openRef.current.click()
  }
  const handleDelete = () => {
    deleteAction()
    setAnchorEl(null)
  }

  // 그룹 수정 관련

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  })

  const dispatchAction = async () => {
    await dispatch(
      modifyDiaryAction({
        ...currentDiary,
        publicStatus: groupSetting,
        groupList: selectedGroupIds,
      })
    )
    return true
  }

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
          <p style={{ fontSize: "0.75rem" }}>수정</p>
        </ListItemButton>
        <ListItemButton onClick={handleDelete}>
          {/* <ListItemText primary="Spam" /> */}
          <p style={{ fontSize: "0.75rem" }}>삭제</p>
        </ListItemButton>
      </Popover>
      <BasicModal
        dispatchAction={dispatchAction}
        modalButton={
          <FormGroup>
            <FormControlLabel
              control={<div ref={openRef} className="test" />}
              label=""
            />
          </FormGroup>
        }
      >
        <h3>공개 설정</h3>
        <div className="radio__wrapper">
          <p>전체 공개</p>
          <Radio
            {...controlProps("a")}
            onClick={() => {
              setGroupSetting("전체공개")
            }}
            color={"secondary"}
          />
        </div>
        <div className="radio__wrapper">
          <p>그룹 공개</p>
          <Radio
            {...controlProps("b")}
            disabled={
              !group !== null && group !== undefined && group.length
                ? false
                : true
            }
            onClick={() => {
              setGroupSetting("그룹공개")
            }}
            color={"secondary"}
          />
        </div>
        {group !== null &&
          groupSetting === "그룹공개" &&
          group.map((item: any) => {
            return (
              <GroupItems
                props={item}
                selectedGroupIds={selectedGroupIds}
                setSelectedGroupIds={setSelectedGroupIds}
              />
            )
          })}
        <div className="radio__wrapper last__radio">
          <p>나만 보기</p>
          <Radio
            {...controlProps("c")}
            onClick={() => {
              setGroupSetting("비공개")
            }}
            color={"secondary"}
          />
        </div>
      </BasicModal>
    </div>
  )
}

export default SettingPopover
