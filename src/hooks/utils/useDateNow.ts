import { useState, useEffect } from 'react';

const useDateNow = (): Date => {
  const [datetime, setDatetime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDatetime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return datetime;
};
export default useDateNow;
