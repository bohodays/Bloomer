import React, { useEffect, useRef } from "react";
import Avatar from "../../common/Avatar/Avatar";
import { SSection } from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";

const GuestBookComment = (props: any) => {
  const commentRef = useRef<HTMLElement>(null);
  console.log(props);

  const commentData = props.info;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          AOS.init();
          observer.unobserve(entry.target);
        }
      });
    });
    if (commentRef.current) {
      observer.observe(commentRef.current);
    }

    const observer2 = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.attributeName === "data-aos") {
          if (
            (mutation.target as HTMLElement).getAttribute("data-aos") === null
          ) {
            AOS.refresh();
          }
        }
      }
    });
    if (commentRef.current) {
      observer2.observe(commentRef.current, { attributes: true });
    }

    return () => {
      observer.disconnect();
      observer2.disconnect();
    };
  }, []);

  const checkDeg = (num: number) => {
    if (num > 0) return "fade-left";
    else if (num === 0) return "fade-down";
    else if (num < 0) return "fade-right";
  };

  return (
    <SSection deg={props.deg} ref={commentRef}>
      <div className="post-it" data-aos={checkDeg(props.deg)}>
        <p className="note">
          <div className="header">
            {/* 작성자 프로필 이미지 */}
            <Avatar size={"medium"} imgIdx={0} />
            {/* 작성자 이름 */}
            <p className="user-name">{commentData.name}</p>
          </div>
          {/* 작성 내용 */}
          <p className="comment">{commentData.comment}</p>
          <p className="date">2023. 03. 25.</p>
        </p>
      </div>
    </SSection>
  );
};

export default GuestBookComment;
