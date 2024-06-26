import { BreadCrumbs } from "../Components/BreadCrumbs";
import { EditableBlock } from "../Components/EditableBlock";
import { TopInfo } from "../Components/TopInfo";
import "../styles/containers/contacts-page.scss";

export const ContactsPage = () => {
  return (
    <>
      <TopInfo>
        <></>
      </TopInfo>
      <section className='contacts-page__wrapper'>
        <EditableBlock
          title='Бесплатная консультация!'
          txt='Всем клиентам, оформившим заявку с сайта, консультация бесплатно!'
        />
      </section>
      <BreadCrumbs link='/' subtext='Главная' title='Контакты' />
      <section className='contacts-page__container'>
        <dl className='contacts-page__dl'>
          <dt>GRAND -service- COOLNESS</dt>
          <dd>Обслуживание холодильной и климатической техники Алматы</dd>
          <dt>Номер:</dt>
          <dd>
            <a href='tel:+77473028989' title='phone'>
              +7(747) 302 89 89
            </a>
          </dd>
          <dt>Адрес:</dt>
          <dd>г. Алматы</dd>
          <dt>Режим работы:</dt>
          <dd>Пн-Вс Без выходных</dd>
        </dl>

        <div className='contacts-page__map'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d41270.36516512219!2d76.90598658934854!3d43.24427337119995!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1719331619805!5m2!1sru!2skz"
          title='map'
          width='100%'
          height='100%'
          loading='lazy'
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>
    </>
  );
};
