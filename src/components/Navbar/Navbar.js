import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { IconContext } from "react-icons";

import logo from "../../assets/logo.png";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarStyle";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const data = [
  {
    to: "/",
    text: "About",
    id: "about",
  },
  {
    to: "/pricing",
    text: "Pricing",
  },
  {
    to: "/signup",
    text: "Contact",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);

  // const navigate = useNavigate();
  const location = useLocation(); // This hook returns the current location object.

  console.log("Show value: ", show);

  const menuToggle = (to, id) => {
    if (id && location.pathname === "/") {
      scrollTo(id);
    }
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    // The Element interface's scrollIntoView() method scrolls the element's ancestor containers such that the element on which scrollIntoView() is called is visible to the user.
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMenu = (to, id) => {
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src={logo} alt="logo" />
            Delta
          </NavLogo>
          <MobileIcon onClick={menuToggle}>
            {show ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((elementList, index) => (
              <NavItem key={index}>
                <NavLinks
                  to={elementList.to}
                  onClick={() => closeMenu(elementList.to, elementList.id)}
                >
                  {elementList.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};
export default Navbar;
