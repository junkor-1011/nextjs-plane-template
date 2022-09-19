import React from 'react';
import { useClientIpv4 } from '@/hooks/sample/clientIp';

export const ClientIpv4: React.FC = () => {
  const ipv4 = useClientIpv4();

  if (ipv4 === undefined) return <div>loading...</div>;
  if (ipv4 === null) return <div>(failed to get ipv4)</div>;
  return <div>{ipv4}</div>;
};
