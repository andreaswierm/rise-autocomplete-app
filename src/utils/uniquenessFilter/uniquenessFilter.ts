export const uniquenessFilter = <T extends unknown>(
  value: T,
  index: number,
  self: T[]
) => self.indexOf(value) === index;
