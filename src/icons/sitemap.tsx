import React, { FC } from "react";

export const SitemapIcon: FC<{ size: string; className?: string }> = ({
  size,
  className,
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M20,13.01h-7V10h1c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2h-4C8.897,2,8,2.897,8,4v4c0,1.103,0.897,2,2,2h1v3.01H4V18H3 v4h4v-4H6v-2.99h5V18h-1v4h4v-4h-1v-2.99h5V18h-1v4h4v-4h-1V13.01z M10,8V4h4l0.002,4H10z" />
  </svg>
);