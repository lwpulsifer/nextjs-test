export const sorted = <T>(arr: T[], cmp: (a: T, b: T) => number) => {
  const newArr = Array.from(arr);
  newArr.sort(cmp);
  return newArr;
};

export const groupBy = <T>(arr: T[], groupingFunction: (groupItem: T) => string): {[key: string]: T[];} => {
  const groups = {};
  arr?.forEach((item) => {
    const groupKey = groupingFunction(item);
    if (groups[groupKey]) {
     groups[groupKey].push(item);
    } 
    else {
     groups[groupKey] = [item];
    }
  });
  return groups;
};
