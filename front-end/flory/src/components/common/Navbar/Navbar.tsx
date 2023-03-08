import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SNavbar } from "./styles";

const Navbar = () => {
  return (
    <SNavbar>
      <button>
        <FontAwesomeIcon icon={faUser} />
      </button>
    </SNavbar>
  );
};

export default Navbar;
