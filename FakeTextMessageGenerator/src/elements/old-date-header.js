import React from 'react';

function OldDateHeader() {
  const hours = Math.floor(Math.random() * 24); // 0 to 23
  const minutes = Math.floor(Math.random() * 60); // 0 to 59

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  let randomTime = `${formattedHours}:${formattedMinutes}`;

  return (
    <div className="date-header date-header-old">
      iMessage
      <div className="date-header-new-container">
        <div className="date-header-today">Yesterday</div>
        <div>{randomTime}</div>
      </div>
    </div>
  );
}

export default OldDateHeader;