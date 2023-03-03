import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import Nav from "./styled/Nav.styled";
import Icon from "./styled/Icon.styled";

const Header = () => {
  return (
    <Link to="/" id="RouterNavLink">
      <Nav>
        <Icon>
          <FaCoins />
          <span>
            COIN <span> TRACKER</span>{" "}
          </span>
        </Icon>
      </Nav>
    </Link>
  );
};

export default Header;
