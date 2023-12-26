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

  console.log("Show value: ", show);

  const menuToggle = () => {
    setShow(!show);
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
          <NavMenu className="demo">
            {data.map((elementList, index) => (
              <NavItem key={index}>
                <NavLinks to={elementList.to}>{elementList.text}</NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};
export default Navbar;
