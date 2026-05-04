import { useEffect, useCallback } from 'react';

/** Fires callback when a specific key is pressed */
export function useKeyPress(
  targetKey: string,
  callback: (event: KeyboardEvent) => void,
  options?: { ctrl?: boolean; shift?: boolean; alt?: boolean; meta?: boolean },
): void {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key !== targetKey) return;
      if (options?.ctrl && !event.ctrlKey) return;
      if (options?.shift && !event.shiftKey) return;
      if (options?.alt && !event.altKey) return;
      if (options?.meta && !event.metaKey) return;
      callback(event);
    },
    [targetKey, callback, options?.ctrl, options?.shift, options?.alt, options?.meta],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}
