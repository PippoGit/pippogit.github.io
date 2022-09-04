import React, { ReactNode } from "react";

export const Section = ({
  children,
  className = "",
}: {
  children: ReactNode | ReactNode[];
  className?: string;
}) => {
  return (
    <div className={`container max-w-6xl mx-auto py-10 ${className}`}>
      {children}
    </div>
  );
};
