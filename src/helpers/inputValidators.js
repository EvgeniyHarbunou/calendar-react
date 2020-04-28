export const validateTime = (startDate, endDate) => {
  return startDate.isSameOrAfter(endDate);
};
