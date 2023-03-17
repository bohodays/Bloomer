import {
  faUser,
  faPenToSquare,
  faHome,
  faListUl,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SNavbar, SNavWrapper } from "./styles";

const Navbar = () => {
  const navigate = useNavigate();
  const handleMove = (target: string) => {
    navigate(target);
  };

  return (
    <SNavWrapper>
      <SNavbar>
        {/* 클래스 부여; 선택된 버튼 wrapper에 wrapper__active, 버튼에 button__active, 아이콘에 item__active 주기 */}
        <div className="button__wrapper wrapper__active">
          <button
            onClick={() => handleMove("/diary/create")}
            className="button__active"
          >
            <FontAwesomeIcon
              className="nav__item item__active"
              icon={faPenToSquare}
            />
          </button>
        </div>
        <button>
          <FontAwesomeIcon className="nav__item" icon={faListUl} />
        </button>
        <button>
          <FontAwesomeIcon className="nav__item" icon={faHome} />
        </button>
        <button>
          <FontAwesomeIcon className="nav__item" icon={faLocationDot} />
        </button>
        <button>
          <FontAwesomeIcon className="nav__item" icon={faUser} />
        </button>
      </SNavbar>
    </SNavWrapper>
  );
};

export default Navbar;
