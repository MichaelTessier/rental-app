export const isEnumValue = <T extends object>(
  value: unknown,
  enumObject: T,
): value is T[keyof T] => {
  return (typeof value === 'string' || typeof value === 'number') && Object.values(enumObject).includes(value as T[keyof T]);
}