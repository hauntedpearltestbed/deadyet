"use client";

interface FormattedDateProps {
  isoString: string;
}

export function FormattedDate({ isoString }: FormattedDateProps) {
  const date = new Date(isoString);
  return (
    <span>
      {date.toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })}
    </span>
  );
}
