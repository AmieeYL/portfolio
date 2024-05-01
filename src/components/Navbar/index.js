import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon } from './NavbarStyledComponent'

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>Logo</NavLogo>
        <MobileIcon></MobileIcon>
        <NavItems>
          <NavLink>Home</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton>GitHub Profile</GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar