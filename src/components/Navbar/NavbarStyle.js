import styled from "styled-components";
import { Container } from "../../GlobalStyle";

import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  margin-bottom: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  width: 100%;
  z-index: 50;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  height: 80px;
  position: relative;
`;

export const NavLogo = styled(NavLink)`
  display: flex;
  justify-items: start;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  z-index: 50;
  text-decoration: none;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;

  @media screen and (max-width: 960px) {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    /* text-align: center; */
    position: absolute;
    top: auto;
    bottom: auto;
    right: 30px;

    font-size: 2.2rem;
    color: white;
    cursor: pointer;
    /* border: 1px solid blue; */
  }
`;

export const NavIcon = styled.img`
  margin-right: 1rem;
  width: 3rem;
`;

export const NavMenu = styled.ul`
  width: 100%;
  display: flex;
  text-align: center;
  list-style: none;
  align-items: center;
  justify-content: flex-end;
  z-index: 50000000;
  /* border: 1px solid green; */

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;

    /* opacity: ${({ show }) => (show ? 1 : 0)}; */
    /* visibility: ${({ show }) => (show ? "visible" : "hidden")}; */
    transform: translateY(${({ show }) => (show ? "0" : "-100vh")});
    transition: transform 0.8s ease;
    background-color: #071c2f;
    /* z-index: -99900; */
    z-index: 50000000;
    /* border: 5px solid blue; */
  }
`;

export const NavItem = styled.li`
  height: 80px;
  text-decoration: none;
  cursor: pointer;
  display: flex;

  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    transition: background-color 0.3s ease;
    /* border: 1px solid white; */

    &:hover {
      background-color: rgba(212, 212, 212, 0.2);
      /* box-shadow: 1px 1px 1px rgba(212, 212, 212, 0.2); */
    }
  }
`;

export const NavLinks = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  transition: color 0.3s ease;

  &:hover {
    color: #c8c9d8;
  }
`;
