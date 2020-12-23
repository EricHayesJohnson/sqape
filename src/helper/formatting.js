export const padWithZero = (num) => {
  num = `${num}`;
  if (2 - num.length > 0) {
    num = `0${num}`;
  }
  return num;
};
