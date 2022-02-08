export const isNotNullable = <T>(
  value: T
): value is Exclude<T, null | undefined> =>
  value !== null && value !== undefined;

export const isNullable = (value: unknown): value is null | undefined =>
  value === null || value === undefined;
