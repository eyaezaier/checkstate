import React, { useState, useEffect } from 'react';

function Timer() {
  const [mountTime, setMountTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMountTime(Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeElapsed = Math.floor((Date.now() - mountTime) / 1000);

  return (
    <div>
      This component has been mounted for {timeElapsed} seconds.
    </div>
  );
}
