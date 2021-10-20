export const sorted = <T>(arr: T[], cmp: (a: T, b: T) => number) => {
  const newArr = Array.from(arr);
  newArr.sort(cmp);
  return newArr;
};
