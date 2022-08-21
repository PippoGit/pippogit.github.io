import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}
export const ClientOnly = ({ children }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
};
