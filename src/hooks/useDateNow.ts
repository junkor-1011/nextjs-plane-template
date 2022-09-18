import React, { useState, useEffect, useCallback } from 'react';

const useDateNow = (): Date => {
  const [datetime, setDatetime] = useState(new Date());

  return datetime;
};
export default useDateNow;
