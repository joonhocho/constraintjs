export const min = (value, limit) => {
  if (limit != null) return Math.max(value, limit);
  return value;
};

export const max = (value, limit) => {
  if (limit != null) return Math.min(value, limit);
  return value;
};

export const minMax = (value, minLimit, maxLimit) => max(min(value, minLimit), maxLimit);
