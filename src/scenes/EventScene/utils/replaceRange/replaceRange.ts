export const replaceRange = (
  value: string,
  start: number,
  end: number,
  replaceValue: string
): string => {
  return value.substring(0, start) + replaceValue + value.substring(end);
};
