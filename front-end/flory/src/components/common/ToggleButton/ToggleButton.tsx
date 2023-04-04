import {
  faBars,
  faCamera,
  faLayerGroup,
  faVolumeOff,
  faVolumeXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import React, { useState, useEffect, RefObject } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../redux/store.hooks"
import { SNav } from "./styles"
import { updateIsPlaying } from "../../../redux/modules/music/music-slice"
import html2canvas, { Options } from "html2canvas"

const ToggleButton = ({ state, gardenType, capture }: any) => {
  const [toggleOnOff, setToggleOnOff] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const music = useAppSelector((store) => store.music)
  const [volumeMute, setVolumeMute] = useState(false)

  // 토글 핸들러 함수
  const handleToggleOnOff = () => {
    setToggleOnOff(!toggleOnOff)
  }

  // 소리 음소거 핸들러 함수
  const handleVolumeOnOff = () => {
    console.log("볼륨 조정", volumeMute)
    if (music.isPlaying) {
      dispatch(updateIsPlaying(false))
      setVolumeMute(true)
    } else {
      dispatch(updateIsPlaying(true))
      setVolumeMute(false)
    }
  }

  useEffect(() => {
    if (music.isPlaying) {
      setVolumeMute(true)
    } else {
      setVolumeMute(false)
    }
  }, [music])

  const handleMoveToGardenList = () => {
    navigate("/garden/list")
  }

  type DownloadOptions = {
    fileName: string
    imageQuality?: number
    canvasOptions?: Partial<Options>
  }

  const defaultOptions: DownloadOptions = {
    fileName: "default",
    imageQuality: 1,
    canvasOptions: {},
  }

  const IMAGETYPE = "image/png"

  const download = (url: string, filename: string) => {
    const linkElement = document.createElement("a")
    linkElement.download = filename
    linkElement.href = url
    linkElement.style.display = "none"

    document.body.appendChild(linkElement)
    linkElement.click()
    document.body.removeChild(linkElement)
  }

  const handleScreenShot = async (
    element: RefObject<HTMLElement> | null,
    options: DownloadOptions
  ) => {
    if (!element || !element.current) console.log("결과가 존재하지 않습니다.")

    const { fileName, imageQuality, canvasOptions } = options
    try {
      const appElement = document.getElementsByClassName(
        "app"
      )[0]! as HTMLElement
      const canvas = await html2canvas(appElement, {
        ...defaultOptions,
        ...canvasOptions,
        useCORS: true,
      })

      // const canvas = await html2canvas(element?.current!, {
      //   ...defaultOptions,
      //   ...canvasOptions,
      //   useCORS: true,
      // })

      console.log("jjjj", appElement)

      download(canvas.toDataURL(IMAGETYPE, imageQuality), fileName)
    } catch (err) {
      console.log(err)
    }
  }

  // const handleScreenShot = () => {
  //   console.log("카메라 눌림")

  //   const appElement = document.getElementsByClassName("app")[0]! as HTMLElement
  //   html2canvas(appElement).then((canvas) => {
  //     console.log(canvas)
  //   })
  // }

  return (
    <SNav gardenType={gardenType}>
      <input
        type="checkbox"
        // href="#"
        className="menu-open"
        name="menu-open"
        id="menu-open"
      />
      <label
        className="menu-open-button"
        htmlFor="menu-open"
        onClick={handleToggleOnOff}
      >
        {toggleOnOff ? (
          <FontAwesomeIcon className="lines" icon={faXmark} />
        ) : (
          <FontAwesomeIcon className="lines" icon={faBars} />
        )}
      </label>
      {state !== "other" && (
        <button
          className="menu-item gardenList"
          onClick={handleMoveToGardenList}
        >
          <FontAwesomeIcon className="gardenList__icon" icon={faLayerGroup} />
        </button>
      )}
      <button className="menu-item volume" onClick={handleVolumeOnOff}>
        {volumeMute ? (
          <FontAwesomeIcon className="volumeMute__icon" icon={faVolumeOff} />
        ) : (
          <FontAwesomeIcon className="volumeMute__icon" icon={faVolumeXmark} />
        )}
      </button>
      <button className="menu-item camera" onClick={(e) => handleScreenShot}>
        <FontAwesomeIcon className="camera__icon" icon={faCamera} />
      </button>
    </SNav>
  )
}

export default ToggleButton
