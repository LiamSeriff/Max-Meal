import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  HamburgerMenu,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

/*
  The code in this file and Navbar.elements.tsx is taken from https://www.youtube.com/watch?v=iP_HqoCuRI0 by Brian Design and
  I followed along with his tutorial to learn React and styled-components.
*/

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Max Meal
            </NavLogo>
            <HamburgerMenu onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerMenu>
            <NavMenu onClick={handleClick}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products">Products</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
