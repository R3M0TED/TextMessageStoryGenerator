import React from 'react';
import Header from './header';
import MessageContainer from './message-container';
import Footer from './footer';
import Keyboard from './keyboard';
import FooterBar from './footer-bar';

function IMessageWindow() {
  return (
    <div className="main">
      <Header></Header>
      <MessageContainer></MessageContainer>
      <Footer></Footer>
      <FooterBar></FooterBar>

      <audio id="typing1" src="/sounds/typing1.mp3"></audio>
      <audio id="typing2" src="/sounds/typing2.mp3"></audio>
      <audio id="typing3" src="/sounds/typing3.mp3"></audio>
      <audio id="typing4" src="/sounds/typing4.mp3"></audio>
      <audio id="typing5" src="/sounds/typing5.mp3"></audio>
      <audio id="typing6" src="/sounds/typing6.mp3"></audio>
      <audio id="messageSentSound" src="/sounds/messageSent.mp3"></audio>
      <audio id="messageRecievedSound" src="/sounds/messageRecieved.mp3"></audio>

    </div>  );
}

export default IMessageWindow;