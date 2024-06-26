import { ReactNode } from "react";
import "../styles/components/text-container.scss";

export const TextContainer = ({ children }: { children: ReactNode }) => {
  return <div className='text-container'>{children}</div>;
};
