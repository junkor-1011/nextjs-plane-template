/**
 * @packageDocumentation utility function for handling types
 */

/**
 * this exception will be raised when the variable is nullish despite it is expeted not to be nullish.
 */
export class NullishError extends Error {}

/**
 * @param x - any variable
 * @returns whether x is nullish(false) or not(true)
 */
export const isNotNullish = (x: unknown): x is Record<string, unknown> => x != null;

/**
 * @param x - any variable
 * @throws {@link NullishError} exception for nullish variable
 */
export const assertNotNullish = (x: unknown): asserts x is Record<string, unknown> => {
  if (x == null) throw new NullishError(`the argument is nullish`);
};
