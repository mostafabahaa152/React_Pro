import React from 'react';
import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor, Linka } from './style';

const Navbar = () => {
    return (
     
      <NavbarSection>
            
      <div className="container">
          
          <Logo>
              <LogoText>Ultra Profile</LogoText>
          </Logo>

          <UlList>
              <ListItem><Linka to="/">Home</Linka></ListItem>
              <ListItem><Anchor href="#">Work</Anchor></ListItem>
              <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
              <ListItem><Anchor href="#">Resume</Anchor></ListItem>
              <ListItem><Anchor href="#">About</Anchor></ListItem>
              <ListItem><Linka to="/Contact">Contact</Linka></ListItem>
          </UlList>
          
      </div>
      
  </NavbarSection>
     
    );
  }

export default Navbar;
