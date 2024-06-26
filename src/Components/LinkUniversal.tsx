import { FC } from "react";
import "../styles/components/link-universal.scss";
import { useNavigate } from "react-router-dom";

type Tlink = {
  link: string;
  title: string;
  image?: string;
};

export const LinkUniversal: FC<Tlink> = ({ title, image, link }) => {
  const navigate = useNavigate();

  return (
    <ul className='link-universal' title='link' onClick={() => navigate(link)}>
      <li
        className='link-universal__image'
        style={{ backgroundImage: `url(${image})` }}
      ></li>
      <li className='link-universal__title'>{title}</li>
    </ul>
  );
};
