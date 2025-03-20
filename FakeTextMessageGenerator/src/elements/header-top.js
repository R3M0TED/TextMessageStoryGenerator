import React, { useState, useEffect, useRef } from 'react';
import HeaderTopIcons from './header-top-icons';

function HeaderTop() {
  const timeRef = useRef(null);

  const [time, setTime] = useState(() => {
    if (timeRef.current) {
      return timeRef.current.innerHTML || '00:00'; 
    }
    return window.ChatTime;
  });

  function incrementTime() {
    let curTime = document.querySelector('.header-time').innerHTML
    let [hours, minutes] = curTime.split(':').map(Number);
    minutes += 1;
    if (minutes === 60) {
      minutes = 0;
      hours += 1;
      if (hours === 24) {
        hours = 0;
      }
    }
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(incrementTime());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header-top">
      <div className="header-time" ref={timeRef}>{time}</div>
      <HeaderTopIcons />
    </div>
  );
}

export default HeaderTop;
