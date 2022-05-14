import styled from "styled-components";
import { NavLink } from "react-router-dom";

const getColor = ({ type }) => {
  switch (type) {
    case "qizil":
      return "red";
    case "sariq":
      return "yellow";
    case "oq":
      return "white";
    case "qora":
      return "black";
    case "yaxshil":
      return "green";
    case "ko'k":
      return "blue";
    default:
      return "white";
  }
};

export const Logo = styled.h1``;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${getColor};
`;

export const NavLinksWrap = styled.div``;

export const NavLinks = styled(NavLink)`
  color: #333;
  font-weight: 500;
  font-size: 18px;
  margin-left: 45px;
  text-decoration: none;
`;
