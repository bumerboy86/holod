import { ReactNode } from "react";
import "../styles/components/grid-container.scss";

export const GridContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div id='grid' className='grid-container'>
      {children}
    </div>
  );
};
