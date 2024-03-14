
import React from 'react';
import Container from './Container';
import MyNavigationPill from './MyNavigationPill';

const Header = () => {
  return (
    <header>
      {/* Other header content */}
     
      <Container>
        <MyNavigationPill/>
      </Container>
    </header>
  );
};

export default Header;
