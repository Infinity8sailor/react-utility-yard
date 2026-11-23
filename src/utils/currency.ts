/**
 * Rounds a monetary amount to a fixed number of decimal places (default 2)
 * without floating-point representation drift.
 */
export function roundCurrency(amount: number, decimals = 2): number {
  if (!Number.isFinite(amount)) return 0;
  const factor = Math.pow(10, decimals);
  return Math.round((amount + Number.EPSILON) * factor) / factor;
}

/**
 * Converts an amount by an FX rate and rounds to 2 decimals.
 */
export function convertCurrency(amount: number, rate: number, decimals = 2): number {
  if (!Number.isFinite(amount) || !Number.isFinite(rate)) return 0;
  return roundCurrency(amount * rate, decimals);
}

/**
 * Formats a numeric amount using Intl.NumberFormat with safe fallback.
 */
export function formatCurrency(
  amount: number,
  currency = 'INR',
  locale = 'en-IN',
  maximumFractionDigits = 2
): string {
  const safe = roundCurrency(amount, maximumFractionDigits);
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits,
    }).format(safe);
  } catch {
    return `${currency} ${safe.toFixed(maximumFractionDigits)}`;
  }
}
