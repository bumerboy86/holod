import { FC, useState } from "react";
import "../styles/components/service-desc.scss";
import { CSSTransition } from "react-transition-group";

type TServiceProps = {
  img: string;
  title: string;
  desc: string;
  price: string;
};
export const ServiceDesc: FC<TServiceProps> = ({ img, title, desc, price }) => {
  const [show, setShow] = useState(false);
  return (
    <article className='service-desc'>
      <div>
        <div className='service-desc__image'>
          <img src={img} alt={title} width={"100%"} height={"250px"} />
        </div>
        <h2>{title}</h2>
      </div>
      <CSSTransition
        in={show}
        timeout={300}
        classNames='service-desc__my-node'
        unmountOnExit
      >
        <>
          <p>{desc}</p>
          <p className='service-desc__price'>Цена {price}</p>
        </>
      </CSSTransition>
      <button
        className={
          show
            ? "service-desc__btn service-desc__btn_back"
            : "service-desc__btn"
        }
        onClick={() => setShow(!show)}
      >
        {show ? "Скрыть описание" : "Подробнее..."}
      </button>
    </article>
  );
};
