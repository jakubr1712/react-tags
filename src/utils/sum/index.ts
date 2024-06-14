export const sum = (values: number[]): number => {
  const sum = values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
};
