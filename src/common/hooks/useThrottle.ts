import {useEffect, useRef} from 'react';

const useThrottle = <T extends (...args: any[]) => any>(
  callback: T,
  cooldownTime: number,
): ((...funcArgs: Parameters<T>) => ReturnType<T>) => {
  const refreshCooldown = useRef<ReturnType<typeof setTimeout> | null>();

  useEffect(() => {
    return () => {
      if (refreshCooldown.current) {
        clearTimeout(refreshCooldown.current);
        refreshCooldown.current = null;
      }
    };
  }, []);

  return (...args) => {
    if (refreshCooldown.current) {
      return;
    }

    refreshCooldown.current = setTimeout(() => {
      refreshCooldown.current = null;
    }, cooldownTime);

    const results = callback(...args);
    return results;
  };
};

export default useThrottle;
