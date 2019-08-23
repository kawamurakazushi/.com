import React from "react";

export const ArrowLeftIcon = ({
  size,
  className,
}: {
  size: string;
  className?: string;
}) => (
  <svg
    className={className ? className : ""}
    style={{ fill: "currentColor" }}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M12.707 17.293L8.414 13 18 13 18 11 8.414 11 12.707 6.707 11.293 5.293 4.586 12 11.293 18.707z" />
  </svg>
);
