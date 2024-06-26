import { FC } from "react";
import "../styles/components/editable-block.scss";

type TEditableBlock = {
  title: string;
  txt: string;
};

export const EditableBlock: FC<TEditableBlock> = ({ title, txt }) => {
  return (
    <div className='editable-block'>
      <h3>{title}</h3>
      <p>{txt}</p>
    </div>
  );
};
