import React from 'react';
import NavBar from './navBar';

function Header({children}) {
  return (
    <div>
      <NavBar/>
      {children}
    </div>
  );
}

export default Header;
