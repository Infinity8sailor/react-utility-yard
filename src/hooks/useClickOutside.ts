import { useEffect, useRef, useCallback } from 'react';

/** Fires callback when a click occurs outside the referenced element */
export function useClickOutside<T extends HTMLElement>(
  callback: () => void,
): React.RefObject<T> {
  const ref = useRef<T>(null);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    },
    [callback],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [handleClick]);

  return ref;
}
