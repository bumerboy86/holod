// import React from 'react'
import { useState } from "react";
import "../styles/components/widjet.scss";

export const Widjet = () => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow((prev) => (!prev))
  }
  return (
    <div className={`widjet ${!show ? 'widjet__hidden' : ''}`}>

        <div className="widjet__content">
        <a href="tel:+77473028989" className="footer__social">
          <i className="fa fa-phone text-primary me-2"></i>
        </a>
        <a href="https://www.instagram.com/grand_servise_holod_almaty_?utm_source=qr&igsh=eG9kMXpkc3V4M2cz" className="footer__social">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://wa.me/77473028989" className="footer__social">
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
      <span className="widjet__show_btn" onClick={showHandler}>
          <i className={`bi ${show ? 'bi-dice-1': 'bi-dice-3'}`}></i>
        </span>
    </div>
  )
}
