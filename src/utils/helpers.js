export const getYear = (date) => {
  if (!date) return;
  const year = date.split("-");
  return year.at(0);
};
