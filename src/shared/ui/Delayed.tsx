import { ReactNode, useEffect, useState } from 'react';

interface DelayedProps {
  delay: number;
  children: ReactNode;
}

const Delayed = ({ delay, children }: DelayedProps) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isShow ? children : null;
};

export default Delayed;
