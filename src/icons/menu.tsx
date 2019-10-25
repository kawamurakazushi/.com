import React from "react";

export const MenuIcon = ({
  size,
  className,
}: {
  size: string;
  className?: string;
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M4 6H20V8H4zM8 11H20V13H8zM13 16H20V18H13z" />
  </svg>
);
