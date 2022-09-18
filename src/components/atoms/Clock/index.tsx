import React from 'react';
import useDateNow from '@/hooks/utils/useDateNow';

export type ClockProps = React.ComponentPropsWithRef<'span'> & {
  useLocale?: boolean;
};
const Clock: React.FC<ClockProps> = ({ useLocale = true, ...props }) => {
  const currentDate = useDateNow();
  return <span {...props}>{useLocale ? currentDate.toLocaleString() : currentDate.toISOString()}</span>;
};
export default Clock;
