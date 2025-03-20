import React from 'react';
import FooterControls from './footer-controls';
import FooterBar from './footer-bar';
import Keyboard from './keyboard';
function Footer() {

  return (
    <div className="footer">
        <div className='footerContainer'>
        <FooterControls></FooterControls>
      <Keyboard></Keyboard>
    </div>
    </div>
  );
}

export default Footer;