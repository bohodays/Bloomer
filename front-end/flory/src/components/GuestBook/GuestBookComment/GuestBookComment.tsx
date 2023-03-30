import React, { useEffect, useRef } from "react"
import Avatar from "../../common/Avatar/Avatar"
import { SSection } from "./styles"
import AOS from "aos"
import "aos/dist/aos.css"
import { convertDateFormat } from "../../../utils/utils"
import { useAppDispatch, useAppSelector } from "../../../redux/store.hooks"
import SettingPopover from "../../common/SettingPopover/SettingPopover"
import {
  deleteGuestBook,
  getAllGuestBookList,
} from "../../../redux/modules/guestBook"

const GuestBookComment = (props: any) => {
  const commentRef = useRef<HTMLElement>(null)
  const dispatch = useAppDispatch()
  const commentData = props.info

  const userId: number = useAppSelector((state) => state.user.userData.userId)
  const writerId: number = commentData.userId
  const isSelf: boolean = userId === writerId ? true : false

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          AOS.init()
          observer.unobserve(entry.target)
        }
      })
    })
    if (commentRef.current) {
      observer.observe(commentRef.current)
    }

    const observer2 = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.attributeName === "data-aos") {
          if (
            (mutation.target as HTMLElement).getAttribute("data-aos") === null
          ) {
            AOS.refresh()
          }
        }
      }
    })
    if (commentRef.current) {
      observer2.observe(commentRef.current, { attributes: true })
    }

    return () => {
      observer.disconnect()
      observer2.disconnect()
    }
  }, [])

  const checkDeg = (num: number) => {
    if (num > 0) return "fade-left"
    else if (num === 0) return "fade-down"
    else if (num < 0) return "fade-right"
  }

  const handleDelete = () => {
    const requestData = {
      bookId: commentData.book_id,
      gardenId: commentData.gardenId,
    }
    dispatch(deleteGuestBook(requestData))
  }

  return (
    <SSection deg={props.deg} ref={commentRef} color={commentData.color}>
      <div className="post-it" data-aos={checkDeg(props.deg)}>
        <p className="note">
          <div className="header">
            {/* 작성자 프로필 이미지 */}
            <Avatar size={"small"} imgIdx={0} />
            {/* 작성자 이름 */}
            <p className="user-name">{commentData.nickName}</p>
            {isSelf && (
              <div className="setting">
                <SettingPopover deleteAction={handleDelete} />
              </div>
            )}
          </div>
          {/* 작성 내용 */}
          <p className="comment">{commentData.contents}</p>
          <p className="date">{convertDateFormat(commentData.created_time)}</p>
        </p>
      </div>
    </SSection>
  )
}

export default GuestBookComment
