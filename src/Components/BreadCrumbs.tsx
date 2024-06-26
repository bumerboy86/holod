import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/bread-crumbs.scss";

type BreadCrumbsProps = {
  link: string;
  subtext: string;
  title: string;
};

export const BreadCrumbs: FC<BreadCrumbsProps> = ({
  link = "/holod",
  subtext,
  title,
}) => {
  const navigate = useNavigate();
  return (
    <ul className='bread-crumbs'>
      <li>
        <p className='bread-crumbs__lnk' onClick={() => navigate(link)}>
          {subtext}
        </p>
        <span> / {title}</span>
      </li>
      <li>
        <p className='bread-crumbs__title'>{title}</p>
      </li>
    </ul>
  );
};
