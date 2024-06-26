import { FC } from "react";
import "../styles/components/button.scss";

type TButton = {
  txt: string;
  fn?: () => void;
};
export const Button: FC<TButton> = ({ txt, fn = () => {} }) => {
  return (
    <div className='btn' onClick={fn}>
      {txt} <i className='fa fa-arrow-right ms-3'></i>
    </div>
  );
};
