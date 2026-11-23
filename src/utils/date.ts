/**
 * Returns local calendar date formatted as YYYY-MM-DD.
 */
export function toIsoDate(input: Date | string | number = new Date()): string {
  const d = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(d.getTime())) return '';
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/**
 * Checks whether two dates fall on the same local calendar day.
 */
export function isSameLocalDay(a: Date | string | number, b: Date | string | number): boolean {
  const isoA = toIsoDate(a);
  return Boolean(isoA) && isoA === toIsoDate(b);
}

/**
 * Formats a date relative to a reference date ("Today", "Yesterday", or short date).
 */
export function formatRelativeDay(
  input: Date | string | number,
  now: Date = new Date(),
  locale = 'en-US'
): string {
  const d = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(d.getTime())) return '';
  if (isSameLocalDay(d, now)) return 'Today';

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (isSameLocalDay(d, yesterday)) return 'Yesterday';

  return d.toLocaleDateString(locale, { month: 'short', day: 'numeric' });
}

/**
 * Returns inclusive whole-day count between two dates (minimum 1 if valid).
 */
export function daysBetween(start: Date | string | number, end: Date | string | number): number {
  const s = new Date(start);
  const e = new Date(end);
  if (Number.isNaN(s.getTime()) || Number.isNaN(e.getTime())) return 0;
  const msPerDay = 86_400_000;
  const diff = Math.round((e.getTime() - s.getTime()) / msPerDay);
  return Math.max(0, diff);
}
