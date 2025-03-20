import React from 'react';
import HeaderReturnButton from './header-return-button';
import HeaderContact from './header-contact';
function HeaderMiddle() {
  return (
    <div className="header-middle">
        <HeaderReturnButton></HeaderReturnButton>
        <HeaderContact></HeaderContact>
        <div className="header-video-call"></div>
    </div>
  );
}

export default HeaderMiddle;