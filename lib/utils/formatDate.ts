export const formatDate = (
  date: unknown,
  format: string = "YYYY-MM-DD"
): string => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date input");
  }

  if (format === "relative") {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
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
