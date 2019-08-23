import React from "react";

export const ArrowRightIcon = ({
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
    <path d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z" />
  </svg>
);
