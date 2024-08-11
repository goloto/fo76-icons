export const getMaxLength = (array: any[][]): number => {
  let max = 0;

  array.forEach((value) => {
    if (value.length > max) {
      max = value.length;
    }
  });

  return max;
};
