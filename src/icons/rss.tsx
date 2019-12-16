import React, { FC } from "react";

export const RssIcon: FC<{ size: string; className?: string }> = ({
  size,
  className,
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ fill: "currentColor" }}
  >
    <path d="M19,20.001C19,11.729,12.271,5,4,5v2c7.168,0,13,5.832,13,13.001H19z" />
    <path d="M12,20.001h2C14,14.486,9.514,10,4,10v2C8.411,12,12,15.589,12,20.001z" />
    <circle cx="6" cy="18" r="2" />
  </svg>
);
