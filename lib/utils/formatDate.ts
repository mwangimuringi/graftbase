export const formatDate = (
  date: unknown,
  format: string = "YYYY-MM-DD"
): string => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date input");
  }

  const options: Record<string, Intl.DateTimeFormatOptions> = {
    "YYYY-MM-DD": { year: "numeric", month: "2-digit", day: "2-digit" },
    "DD-MM-YYYY": { day: "2-digit", month: "2-digit", year: "numeric" },
    "MMM DD, YYYY": { year: "numeric", month: "short", day: "2-digit" },
  };

  return new Intl.DateTimeFormat(
    "en-GB",
    options[format] || options["YYYY-MM-DD"]
  ).format(date);
};
