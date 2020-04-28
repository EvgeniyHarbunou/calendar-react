export const validateTime = (startDate, endDate) => {
  if (!startDate.isValid || !startDate.isValid) {
    return true;
  }
  return startDate.isSameOrAfter(endDate);
};
