import React, { useState, useEffect } from "react";
import { SAvatar } from "./styles";
import AWS from "aws-sdk";

interface AvatarProps {
  size?: "big" | "medium" | "small";
  imgIdx?: number | string;
  onClick?: () => void;
  status?: string;
  tmpsrc?: string;
  src?: number | string;
}

function Avatar({
  size,
  status,
  imgIdx,
  onClick,
  tmpsrc,
  src,
}: AvatarProps): JSX.Element {
  let imgSrc;

  // tmpsrc : 클라이언트에서 바로 가져오는 이미지src
  // src : s3에서 불러오는 이미지 키값

  // s3 bucket 이미지 읽어오기
  const s3 = new AWS.S3();
  const [imageUrl, setImageUrl] = useState(""); //실제 이미지

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_S3_REGION,
  });

  useEffect(() => {
    if (imgIdx === "11" && src != null) {
      const params = {
        Bucket: "bloomer205",
        Key: `${src}`,
      };
      s3.getSignedUrlPromise("getObject", params)
        .then((url) => setImageUrl(url))
        .catch((err) => console.error(err));
    }
  }, [src]);

  if (imgIdx === "11" || tmpsrc === "") {
    // s3에서 가져오기
    imgSrc = imageUrl;
  }
  else if (tmpsrc != null) {
    // 파일 미리 보기 (아직 저장이 안된 상태)
    imgSrc = tmpsrc;
  } else {
    imgSrc = imgIdx
      ? require(`../../../assets/imgs/profile_icon/profile${imgIdx}.png`)
      : require(`../../../assets/imgs/profile_icon/profile0.png`);
  }

  let sizeRem = "8rem";
  if (size === "small") {
    sizeRem = "2rem";
  } else if (size === "medium") {
    sizeRem = "5rem";
  }

  return (
    <SAvatar size={sizeRem} status={status} onClick={onClick}>
      <img src={imgSrc} />
    </SAvatar>
  );
}
export default Avatar;
