import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import BackButton from "../../components/common/BackButton/BackButton"
import GuestBookComment from "../../components/GuestBook/GuestBookComment/GuestBookComment"
import { getAllGuestBookList } from "../../redux/modules/guestBook"
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks"
import { SMain } from "./styles"

const GuestBook = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const location = useLocation()
  const gardenData = location.state !== null ? location.state.gardenData : null
  const gardenId = gardenData !== null ? gardenData.gardenId : null

  console.log(gardenData, "sssssssssssssss")

  const guestBookList = useAppSelector((state) => state.guestBook.guestBookList)

  useEffect(() => {
    if (gardenId !== null) {
      dispatch(getAllGuestBookList(gardenId))
    }
  }, [])

  const degArray = [2, -2, 0, 2, 2, -2]

  console.log("받은 코멘트 리스트", guestBookList)

  return (
    <>
      {gardenId === null ? (
        <div>잘못된 접근입니다</div>
      ) : (
        <SMain>
          <BackButton color="black" />
          <div>{gardenData.nickname}님의 방명록입니다</div>
          <div
            className="create"
            onClick={() =>
              navigate("/guestbook/create", { state: { gardenData } })
            }
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
          {guestBookList.map((item, index) => {
            return (
              <GuestBookComment
                info={item}
                deg={degArray[index % 6]}
                key={index}
              />
            )
          })}
        </SMain>
      )}
    </>
  )
}

export default GuestBook
