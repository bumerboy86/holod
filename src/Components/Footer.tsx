import "../styles/components/footer.scss";
import { isMobile } from "../utils/utils";
import logo from "../assets/main-logo.png"

export const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        <img src={logo} alt="main logo" width={30}></img>GRAND -service- COOLNESS
         2024 Copyright ©
      </p>
      <ul>
        <li className='footer__info'>г. Алматы</li>
      </ul>
      <section className='footer__contacts'>
        <p className='footer__info'>Телефон:</p>
        {isMobile() ? (
          <a href='tel:+77473028989' className='footer__social'>
            <small className='fa fa-phone text-primary me-2'></small>
            +7(747) 302 89 89
          </a>
        ) : (
          <p className='footer__social'>
            <small className='fa fa-phone text-primary me-2'></small>+7(747) 302 89 89
          </p>
        )}
        <p className='footer__info'>Инстаграмм:</p>
        <a
          href='https://www.instagram.com/grand_servise_holod_almaty_?utm_source=qr&igsh=eG9kMXpkc3V4M2cz'
          className='footer__social'
          target='_blank'
          rel='noopener'
        >
          <i className='bi bi-instagram'></i>
          grand-service-coolness
        </a>
      </section>
    </footer>
  );
};
