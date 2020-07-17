import React, { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date(time.getTime() + 1000));
    }, 1000);
  }, [time]);

  return (
    <div>{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</div>
  );
}

export default App;
