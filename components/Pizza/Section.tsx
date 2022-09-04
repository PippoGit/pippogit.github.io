import React, { ReactNode } from "react";

export const Section = ({
  children,
  className = "",
}: {
  children: ReactNode | ReactNode[];
  className?: string;
}) => {
  return (
    <div
      className={`container max-w-5xl md:mx-w-6xl mx-auto py-10 md:px-4 sm:px-3 px-2 ${className}`}
    >
      {children}
    </div>
  );
};
