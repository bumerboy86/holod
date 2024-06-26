import { ReactNode } from "react";
import "../styles/components/about-us-text.scss";

export const AboutUsText = ({ children }: { children: ReactNode }) => {
  return <div className='about-us-text'>{children}</div>;
};
