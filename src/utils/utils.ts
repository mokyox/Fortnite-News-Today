export const displayDate = (): string => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const;

  return new Date().toLocaleDateString("en-UK", options);
};
