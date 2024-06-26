import { ReactNode } from "react";
import "../styles/components/top.scss";
import logo from "../assets/main-logo.png"

export const TopInfo = ({ children }: { children: ReactNode }) => {
  return (
    <div className='top'>
      <section className='top__addres'>
        <h1 className='top__title'><img src={logo} alt="main logo" width={50}></img>GRAND -service- COOLNESS</h1>
        <ul>
          <li>г. Алматы</li>
        </ul>
        <a
          href='https://wa.me/77473028989'
          className='top__phone'
          target='_blank'
          rel='noopener'
        >
          <i className='bi bi-whatsapp'></i>
          +7 (747) 302 89 89
        </a>
      </section>
      {children}
    </div>
  );
};
