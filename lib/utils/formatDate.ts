/**
 * Formats a given date into different formats.
 * Supports standard date formats and relative time (e.g., "2 days ago").
 *
 * @param {Date | string} date - The date to format.
 * @param {string} format - The format type ("YYYY-MM-DD", "DD-MM-YYYY", "MMM DD, YYYY", "relative").
 * @returns {string} - The formatted date string.
 */
export const formatDate = (
  date: Date | string,
  format: string = "YYYY-MM-DD"
): string => {
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  if (!(parsedDate instanceof Date) || isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date input");
  }

  if (format === "relative") {
    const now = new Date();
    const diffMs = now.getTime() - parsedDate.getTime();
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
  ).format(parsedDate);
};
