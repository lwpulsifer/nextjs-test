export const sorted = <T>(arr: T[], cmp: (a: T, b: T) => number) => {
  const newArr = Array.from(arr);
  newArr.sort(cmp);
  return newArr;
};

export const wrapSlice = <T>(arr: T[], start?: number, end?: number) => {
  if (start > end) {
    return arr.slice(start).concat(arr.slice(0, end));
  }
  return arr.slice(start, end);
};
