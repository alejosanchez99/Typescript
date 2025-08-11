

export const add = (x: number, y: number) => {
  return x + y;
};

export const sample = <T>(list: T[]): T => {
  const idx = Math.floor(Math.random() * list.length);
  return list[idx];
};

export const pi = 3.14;