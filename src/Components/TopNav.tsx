import { useState } from "react";
import "../styles/components/navbar.scss";
import { useNavigate } from "react-router-dom";

export const TopNav = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const toogleHide = () => {
    setHide(!hide);
  };

  const navHandler = (link: string) => {
    setHide(false);
    navigate(link);
  };
  return (
    <nav className='navbar'>
      <button
        className='navbar__btn'
        onClick={toogleHide}
        title='more'
      ></button>
      <div className={hide ? "navbar__bg" : "navbar__bg navbar__hide_bg"}>
        <ul className={hide ? "navbar__list" : "navbar__list navbar__hide"}>
          <li className='navbar__close'>
            <small className='navbar__close-btn' onClick={toogleHide}></small>
          </li>
          <li className='navbar__txt' onClick={() => navHandler("/holod")}>
            Главная
          </li>
          <li
            className='navbar__txt'
            onClick={() => navHandler("/holod/our-services")}
          >
            Услуги
          </li>
          {/* <li className='navbar__txt' onClick={() => navHandler("/price")}>
            Прайс-лист
          </li> */}
          <li className='navbar__txt' onClick={() => navHandler("/holod/contacts")}>
            Контакты
          </li>
        </ul>
      </div>
    </nav>
  );
};
