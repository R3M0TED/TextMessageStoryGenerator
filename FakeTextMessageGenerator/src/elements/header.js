import React from 'react';
import HeaderTop from './header-top';
import HeaderMiddle from './header-middle';
import HeaderFooter from './header-footer';
function Header() {
  return (
    <div className="header">
      <HeaderTop></HeaderTop>
      <HeaderMiddle></HeaderMiddle>
      <HeaderFooter></HeaderFooter>
    </div>
  );
}

export default Header;