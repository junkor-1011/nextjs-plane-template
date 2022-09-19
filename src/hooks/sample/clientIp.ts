/* eslint-disable @typescript-eslint/promise-function-async */
import { useEffect, useState } from 'react';
import axios from 'axios';

type Ipv4Result = string | undefined | null;

/**
 * @returns unloaded: undefined, error: null, loaded: string(ip)
 */
export const useClientIpv4 = (): Ipv4Result => {
  const [ipv4, setIpv4] = useState<Ipv4Result>(undefined);

  useEffect(() => {
    axios
      .get<string>('https://checkip.amazonaws.com')
      .then((res) => res.data)
      .then((data) => data.trim())
      .then((data) => setIpv4(data))
      .catch(() => setIpv4(null));
  }, []);

  return ipv4;
};
